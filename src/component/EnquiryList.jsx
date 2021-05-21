import React from "react";
import { Link } from "react-router-dom";

const EnquiryList = (props) => {
  const renderList = ({ enquiryList }) => {
    if (enquiryList) {
      return enquiryList.map((data) => {
        return (
          <Link
            key={data.id}
            className="list-group-item list-group-item-action"
          >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Course: {data.courseName}</h5>
              <small class="text-muted">3 days ago</small>
            </div>
            <p class="mb-1">{data.message}</p>
            <small class="text-muted">
              Sent By: {data.name} , phone : {data.phone}, email: {data.email}
            </small>
          </Link>
        );
      });
    }
  };
  return <div class="list-group">{renderList(props)}</div>;
};

export default EnquiryList;
