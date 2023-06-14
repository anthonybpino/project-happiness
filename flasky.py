import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
#import psycopg2
from flask import Flask, jsonify
from flask_cors import CORS

#################################################
# Database Setup
#################################################


engine = create_engine("postgresql+psycopg2://postgres:feb2023%40@localhost:5432/happiness_db")



# Reflect the existing database into a new model
Base = automap_base()
# Reflect the tables
Base.prepare(autoload_with=engine)
Base.classes.keys()
happiness = Base.classes.happiness
session = Session(engine)
session.query(happiness.country).all()


# # Save reference to the table


# #################################################
# # Flask Setup and CORS to allow for cross site scripting
# #################################################
app = Flask(__name__)
CORS(app)

# #################################################
# # Flask Routes
# #################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/countries<br/>"
    ) 


@app.route("/api/v1.0/countries", methods=['GET'])
def countries():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    
    """Return a list of all country data"""
       
    results = session.query(happiness.country, happiness.happiness_score, happiness.gdp_per_capita, happiness.social_support, happiness.healthy_life_expectancy, happiness.freedom_to_make_life_choices, happiness.generosity, happiness.perceptions_of_corruption, happiness.rank, happiness.region, happiness.sub_region, happiness.iso_alpha).all()
    # Close db session
    session.close()

    all_happiness = []
    for country, happiness_score, gdp_per_capita, social_support, healthy_life_expectancy, freedom_to_make_life_choices, generosity, perceptions_of_corruption, rank, region, sub_region, iso_alpha in results:
        happiness_dict = {}
        happiness_dict["country"] = country
        happiness_dict["happiness_score"] = happiness_score
        happiness_dict["gdp_per_capita"] = gdp_per_capita
        happiness_dict["social_support"] = social_support
        happiness_dict["healthy_life_expectancy"] = healthy_life_expectancy
        happiness_dict["freedom_to_make_life_choices"] = freedom_to_make_life_choices
        happiness_dict["generosity"] = generosity
        happiness_dict["perceptions_of_corruption"] = perceptions_of_corruption
        happiness_dict["rank"] = rank
        happiness_dict["region"] = region
        happiness_dict["sub_region"] = sub_region
        happiness_dict["iso_alpha"] = iso_alpha
        all_happiness.append(happiness_dict)

  
    return jsonify(all_happiness)

if __name__ == '__main__':
    app.run(debug=True)
