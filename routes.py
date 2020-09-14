import datetime

from sqlalchemy import func
from flask import request, jsonify, send_from_directory

from app import app, db
from models import *


@app.route('/')
@app.route('/home')
def root():
    return app.send_static_file('index.html')


@app.route("/api/expenditures", methods=["POST"])
def add_expenditure():

    tags = request.json.pop('tags')

    expenditure = Expenditure(**request.json)
    for tag in tags:
        instance = Tag.query.filter(Tag.name == tag['name']).first()
        expenditure.tags.append(instance)
    db.session.add(expenditure)
    db.session.commit()

    return jsonify(ExpenditureSchema().dump(expenditure))


@app.route("/api/expenditures", methods=["GET"])
def get_expenditure():
    limit = request.args.get('limit')
    if limit:
        all_expenditures = Expenditure.query.order_by(
            Expenditure.created_date.desc()).limit(limit).all()
    else:
        all_expenditures = Expenditure.query.all()
    result = ExpenditureSchema(many=True).dump(all_expenditures)
    return jsonify(result)


@app.route("/api/expenditures/<id>", methods=["DELETE"])
def expenditure_delete(id):
    expenditure = Expenditure.query.get(id)
    db.session.delete(expenditure)
    db.session.commit()

    return ExpenditureSchema().jsonify(expenditure)


@app.route("/api/tags", methods=["POST"])
def add_tag():
    tag = Tag(**request.json)
    db.session.add(tag)
    db.session.commit()

    return jsonify(TagSchema().dump(tag))


@app.route("/api/tags", methods=["GET"])
def get_tags():
    all_tags = Tag.query.all()
    result = TagSchema(many=True).dump(all_tags)
    return jsonify(result)


@app.route("/api/tags/<id>", methods=["GET"])
def tag_detail(id):

    tag = Tag.query.get(id)

    result_year = db.session.query(func.strftime("%Y", Expenditure.created_date), func.sum(Expenditure.amount)) \
        .join(tags, tags.columns.expenditure_id == Expenditure.id) \
        .filter(tags.columns.tag_id == id) \
        .group_by(func.strftime("%Y", Expenditure.created_date)) \
        .all()

    current_year = datetime.date.today().year
    result_month = db.session.query(func.strftime("%Y-%m", Expenditure.created_date), func.sum(Expenditure.amount)) \
        .join(tags, tags.columns.expenditure_id == Expenditure.id) \
        .filter(tags.columns.tag_id == id) \
        .filter(func.strftime("%Y", Expenditure.created_date) == str(current_year)) \
        .group_by(func.strftime("%Y-%m", Expenditure.created_date)) \
        .all()

    return jsonify({
        **TagSchema().dump(tag),
        "by_year": result_year,
        "by_month": result_month
    })


@app.route("/api/tags/<id>", methods=["DELETE"])
def tag_delete(id):
    tag = Tag.query.get(id)
    db.session.delete(tag)
    db.session.commit()

    return TagSchema().jsonify(tag)


@app.route("/api/tags/summary", methods=["GET"])
def get_tag_expenditures():
    result = db.session.query(Tag, func.sum(Expenditure.amount)) \
        .join(tags, tags.columns.expenditure_id == Expenditure.id) \
        .join(Tag, tags.columns.tag_id == Tag.id) \
        .group_by(Tag.id) \
        .all()
    return jsonify([{**TagSchema().dump(e[0]), 'sum': e[1]} for e in result])


@app.route("/api/current-status", methods=["GET"])
def get_status():
    expenditure_sum = db.session.query(
        Expenditure.username, func.sum(Expenditure.amount)) \
        .group_by(Expenditure.username) \
        .all()
    return jsonify(expenditure_sum)


@app.route('/<path:path>')
def send_static(path):
    return app.send_static_file('index.html')