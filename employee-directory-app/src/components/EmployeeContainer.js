import React, { Component } from "react";
import Header from "/Header";
import Wrapper from "/Wrapper";
import API from "../utils/API";

class EmployeeConatiner extends Component {
    state = {
        search: "",
        results: []
    };

    componentDidMount() {
        this.searchGiphy("kittens");
      }

}