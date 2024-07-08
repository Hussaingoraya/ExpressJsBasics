const Home = async (req, res) => {
  try {
    res.status(200).send("HOME Auth controller Works");
  } catch (error) {
    console.log(error);
  }
};
const signup = async (req, res) => {
  try {
    res.status(200).send("Register Auth controller Works");
  } catch (error) {
    console.log(error);
  }
};
module.exports = { Home , signup };
