import { Avatar, message, Modal, Table, Tag, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import AddTeamForm from '../../components/forms/AddTeamForm';
import Default from '../../components/layouts/Default';
import Header from '../../components/ux/Header';
import { post } from '../../services/http-request';
import { get } from 'lodash';

export default function Teams({ className }: any) {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Projects',
      dataIndex: 'projects',
      key: 'projects',
      render: (projects: any) => (
        <Avatar.Group>
          {projects &&
            projects.map((proj: any) => {
              return (
                <Tooltip
                  title={proj.name}
                  placement="top"
                  className="cursor-pointer"
                >
                  <Avatar>
                    <span>{proj.name.slice(0, 1)}</span>
                  </Avatar>
                </Tooltip>
              );
            })}
        </Avatar.Group>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'active',
      key: 'active',
      render: (active: any) => (
        <>
          <Tag color={active ? 'green' : 'red'} key={active}>
            {active ? 'Active' : 'Inactive'}
          </Tag>
        </>
      ),
    },
  ];
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);

  const saveData = async (e: Object) => {
    const response = await post('add-team', { payload: e });
    if (response.success) {
      getData()
      message.success('Team Added Successfully');
      setVisible(false);
    } else {
      message.error(response.message);
    }
  };

  const getData = async () => {
    const response = await post('teams');
    if (response.success) {
      setData(response.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Default className="teams app-container m-auto w-full">
      <Header
        title="Teams"
        buttonText="Add New Member"
        onClick={() => setVisible(true)}
      />
      <div className="teams-table mt-5">
        <Table columns={columns} dataSource={data} bordered={true} />
      </div>

      <Modal
        visible={visible}
        title="Add Team Member"
        footer={null}
        onCancel={() => setVisible(false)}
      >
        <AddTeamForm onSave={saveData} />
      </Modal>
    </Default>
  );
}
