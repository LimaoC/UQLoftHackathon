#Standard libraries
import sqlite3

#Dynamic pathing
from os import path
ROOT = path.dirname(path.realpath(__file__))

#Open database
def open_db():
    db = sqlite3.connect(path.join(ROOT, "UQLoft.db"))
    db.commit()
    return db

#Close database
def close_db(db):
    if db is not None:
        db.close()

#Search for product
def is_valid_course(query_course_code):
    db = open_db()
    matches = []
    papers =  db.execute("SELECT * FROM papers WHERE course_code LIKE ?", ("%" + query_course_code.lower() + "%",)).fetchall()
    if papers:
        return True
    else:
        return False

#Add product lot
def add_lot(product):
    db = open_db()
    db.execute("INSERT INTO lots (ref, lot, info) VALUES (?, ?, ?)", (product.reference, product.lot, date.today().strftime("%d/%m/%Y")))
    db.commit()
    close_db(db)

#Update databse information depending on input data
def update_product(product):
    db = open_db()
    response = {"new":False, "lot_changed":False, "reference":product.reference}
    search_product = db.execute("SELECT * FROM products WHERE ref=?", (product.reference,)).fetchone()
    if search_product:
        db.execute("UPDATE products SET description = ? WHERE ref=?", (product.description, product.reference))
    else:
        db.execute("INSERT INTO products (ref, description) VALUES (?, ?)", (product.reference, product.description))
        response["new"] = True
    sql_lots = db.execute("SELECT * FROM lots WHERE ref=?", (product.reference,)).fetchall()
    lots = [lot[0] for lot in sql_lots]
    if not product.lot in lots and not product.lot == "":
        db.execute("INSERT INTO lots (ref, lot, info) VALUES (?, ?, ?)", (product.reference, product.lot, date.today().strftime("%d/%m/%Y")))
        response["lot_changed"] = True
    db.commit()
    close_db(db)
    return response
