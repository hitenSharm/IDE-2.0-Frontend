import React from "react";
import { EditOutlined } from "@ant-design/icons";
import { Card, Avatar } from "antd";
import { useDispatch, useSelector } from "react-redux";

const CodeCard = (props) => {
  const { Meta } = Card;
  const dispatch = useDispatch();
  const jwtToken = useSelector((state) => state.userDetails.token);
  var image;
  if (props.lang == "C++") {
    image =
      "https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png";
  }
  if (props.lang == "Python") {
    image =
      "https://www.acsce.edu.in/blog/wp-content/uploads/2017/03/python-logo.jpg";
  }
  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt={props.lang} src={image} height={"200px"} />}
      actions={[<EditOutlined key="edit" />]}
    >
      <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={props.name}
        description="possible feature"
      />
    </Card>
  );
};

export default CodeCard;
