const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  findSteps
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id });
}

function findSteps(id) {
  return db
    .select(
      "steps.id", "steps.instructions",
      "schemes.scheme_name", "steps.step_number"
    )
    .from("schemes")
    .where("steps.scheme_id", id)
    .innerJoin("steps", "steps.scheme_id", "schemes.id")
    .orderBy('steps.step_number', "asc");
}
