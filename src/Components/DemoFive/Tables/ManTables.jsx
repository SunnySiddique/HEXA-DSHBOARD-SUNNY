import { Avatar, Progress, Table } from "antd";

const dataSource = [
  {
    key: "1",
    name: "Robert Clinton",
    company: (
      <div className="price-title">
        <p>$108,536</p>
      </div>
    ),
    product: "ReactJs, HTML",
    progress: (
      <>
    <Progress percent={100} showInfo={false} />
      </>
    ),
    libery: "100%",
    ImageSrc:
      "data:image/png;base64,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",
  },
  {
    key: "2",
    name: "Michael Johnson",
    company: (
      <div className="price-title">
        <p>$1038,536</p>
      </div>
    ),
    product: "Laravel, Angular",
    progress: (
      <>
    <Progress percent={65} showInfo={false} />
      </>
    ),
    libery:"75%",
    percent: "75%",
    ImageSrc:
      "data:image/png;base64,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",
  },
  {
    key: "3",
    name: "Daniel White",
    company: (
      <div className="price-title">
        <p>$11,536	</p>
      </div>
    ),
    progress: (
      <>
    <Progress percent={95} showInfo={false} />
      </>
    ),
    libery: "65%",
    product: "Python,MySQL",
    ImageSrc:
      "data:image/png;base64,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",
  },
  {
    key: "4",
    name: "Michael Johnson",
    company: (
      <div className="price-title">
        <p>$11,536</p>
      </div>
    ),
    progress: (
      <>
    <Progress percent={65} showInfo={false} />
      </>
    ),
      libery: "60%",
    product: "Wordpress",

    ImageSrc:
      "data:image/png;base64,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",
  },
  {
    key: "5",
    name: "Michael Johnson",
    company: (
      <div className="price-title">
        <p>Wordpress	</p>
      </div>
    ),
    product: "Photoshop",
    progress: (
      <>
    <Progress percent={50} showInfo={false} />
      </>
    ),
    libery: "20%",
    ImageSrc:
      "data:image/png;base64,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",
  },
  {
    key: "6",
    name: "Daniel White",
    company: (
      <div className="price-title">
        <p>$11,536	</p>
      </div>
    ),
    progress: (
      <>
        <Progress type="circle" percent={50} size={20} />
      </>
    ),
    libery: "10%",
    product: "Python,MySQL",
    ImageSrc:
      "data:image/png;base64,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",
  },
];

const columns = [
  {
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <span>
        <Avatar shape="square" src={record.ImageSrc}></Avatar>
        <span className="table-text" style={{ marginLeft: "8px" }}>
          {text}
        </span>
      </span>
    ),
  },
  {
    dataIndex: "company",
    key: "company",
  },
  {
    dataIndex: "product",
    key: "product",
  },
  {
    dataIndex: "progress",
    key: "progress",
  },
  {
    dataIndex: "libery",
    key: "libery",
  },
];

const ManTables = () => {
  return (
    <div>
      <Table
        scroll={{ x: true }}
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      />
    </div>
  );
};

export default ManTables;