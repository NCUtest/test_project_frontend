import React from 'react';

const Services = () => {
  return (
    <section className="page-section bg-white" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">財政部國有財產署<br/>航空照片影像判釋申請系統</h2>
          <h3 className="section-subheading text-muted">Service</h3>
        </div>
        <div className="row text-center" style={{ marginTop: "40px" }}>
          <div className="col-md-4">
            <a href="case_rules.php">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-warning"></i>
                <i className="fas fa-question fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3 text-dark">服務需知 & 收費標準</h4>
            </a>
            <p className="text-muted">申請前，請詳閱服務需知與收費標準。</p>
          </div>
          <div className="col-md-4">
            <a href="case_apply.php">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-info"></i>
                <i className="fas fa-edit fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3 text-dark">申請判釋</h4>
            </a>
            <p className="text-muted">判釋處理需數個工作天，請耐心等候通知。</p>
          </div>
          <div className="col-md-4">
            <a href="case_query.php">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-success"></i>
                <i className="fas fa-search fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3 text-dark">查詢進度 & 上傳收據</h4>
            </a>
            <p className="text-muted">您可透過手機及收件編號查詢案件處理進度及上傳繳費收據。</p>
          </div>
        </div>
        <p className="text-danger text-center" style={{ fontWeight: "bold" }}>
          本中心接受委託僅對國產署提供資料進行判釋，若有相關疑義或對判釋報告有疑問，敬請洽詢國產署做後續處理。
        </p>
      </div>
    </section>
  );
};

export default Services;

