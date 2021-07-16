import React from "react";
import { Component, useState, useEffect } from "react";

import GeneralCard from "./GeneralCard/GeneralCard";
import Biography from "./Biography/Biography";
import Employees from "./Employees/Employees";
import Documents from "./Documents/Documents";
import { connect } from "react-redux";
import AuthHeader from "../AuthHeader";
import { reloadAfterEdit } from "../../actions/profileAction"

import PropTypes from "prop-types";


const ProfilePage = ({userProfile, loggedInUser, isAuthenticated, isLoggedOut, history, toReload, reloadAfterEdit}) => {
    
  
  /*
    const [user, setUser] = useState({
      "_id": "60dbc77aeda7da46a1baa945",
      "image": "5ef7c4986f5bab2e3b01580989de5ba8",
      "biography": "y is coolguy and I have a lot of money",
      "name": " hs",
      "username": "arsm",
      "email": "muse@lhars",
      "password": "i123",
      "typeOfUser": "Company",
      "typeUser": {
          "employees": ["kdslmf","KSmckmdlkc"],
          "documents": [
              "<nameofDoc1>",
              "<nameofDoc2>",
              "blob:http://localhost:3000/4c99e26a-c36f-426a-b96c-cdf8e4b266d6",
              "8bccbae1e6b654a4e9013cd7152ad30b",
              "eccc993eddaec292abd8a96ecf212f0c",
              "4d2f89e78cc190eb5f0d34344e53c9a9",
              "8b1e04af1a5087e91c576bee6a451c22",
              "3095a884455d46ef99fb329a0c0d7efc",
              "32549de1422c63e8c20dc57e4830d348",
              "8d9b7c2aad3bdc1b1381fb3254c66e43"
          ],
          "_id": "60dbc77aeda7da46a1baa944",
          "__v": 0
      },
      "__v": 0
  });
  */

    useEffect(() => {
      console.log("THIS IS UserProfile", userProfile);
      if (!isAuthenticated) {
        history.push('/login');
      }
    }, [isAuthenticated])

    useEffect(() => {
      if(toReload) {
        reloadAfterEdit();
        window.location.reload();
      }
    }, [toReload])


  return (
    <>
      <AuthHeader
        user={loggedInUser}
        isAuthenticated={isAuthenticated}
        history={history}
      />
      <div className="profile_edit_page mt-4">
        <GeneralCard user={userProfile} loggedInUser={loggedInUser} />
        <Biography bioText={userProfile.biography} />
        {loggedInUser && userProfile.typeUser && loggedInUser.typeOfUser === "Company" ? (
          <Documents documents={userProfile.typeUser.documents} />
        ) : (
          <h3></h3>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  loggedInUser: state.user.user.sentUser,
  isAuthenticated: state.user.isAuthenticated,
  isLoggedOut: state.user.isLoggedOut,
  userProfile: state.profile.profile,
  toReload: state.profile.toReload,

});

export default connect(mapStateToProps, {reloadAfterEdit})(ProfilePage);

// export default ProfilePage
