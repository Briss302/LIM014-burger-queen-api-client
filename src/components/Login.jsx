import React from "react";

const Inicio = () => {
  return (
    <form>
    <div className="form-group">
        <label for="inputEmail">Email</label>
        <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
    </div>
    <div className="form-group mt-1">
        <label for="inputPassword">Password</label>
        <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
    </div>
    <button type="submit" className="btn btn-primary mt-2">Sign in</button>
</form>
  );
};

export default Inicio;
