import { FilePdfOutlined, PictureOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import _ from "lodash";
import moment from "moment";
import React from "react";

interface AttachmentsProps {
  data?: any[];
}

export default function Attachments({ data }: AttachmentsProps) {
  return (
    <div className="attatchments">
      <div className="flex items-center">
        <PictureOutlined className="mr-2 text-gray-500" />
        <h1 className="text-base font-medium text-gray-500">
          Attachments ({data?.length && `${data.length}`})
        </h1>
      </div>
      {data?.length === 0 && (
        <p className="text-center text-gray-500 my-10">
          No Attatchments Found...
        </p>
      )}

      {data && data.length > 0 && (
        <div className="attatchments-list">
          {data.map((item) => {
            const fileType = item.location.split(".");
            return (
              <div className="attatchments-list-item">
                <Avatar
                  shape="square"
                  icon={
                    fileType[fileType.length - 1] === "pdf" ? (
                      <FilePdfOutlined />
                    ) : (
                      ""
                    )
                  }
                  src={item.location}
                ></Avatar>
                <h1>Uploaded By: {_.get(item, "user.fullName")}</h1>
                <p>
                  Uploaded On: {moment(item.createdAt).format("DD/MM/YYYY")}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
