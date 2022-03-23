class Auth {
  constructor() {
    // if (JSON.parse(localStorage.getItem("bjwt"))) {
    //   this.authenticated = true;
    // } else {
    //   this.authenticated = false;
    // }
    this.authenticated = true;
  }
  login(cb) {
    this.authenticated = true;
    cb();
  }
  logout(cb) {
    this.authenticated = true;
    cb();
  }
  isAuthenticated() {
    return this.authenticated;
  }
}
export default new Auth();
