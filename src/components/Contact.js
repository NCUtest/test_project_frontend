import React from 'react';

const Contact = () => {
  return (
    <section className="page-section text-center">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">聯絡資訊</h2>
          <h3 className="section-subheading text-muted">Contact us</h3>
        </div>
        <div className="row">
          <div className="offset-lg-1 col-lg-10 offset-lg-1">
            <p><i className="fas fa-phone"></i> 請洽03-4227151#27688（高小姐）</p>
            <p><a href="mailto:intpn@csrsr.ncu.edu.tw"><i className="far fa-envelope"></i> intpn@csrsr.ncu.edu.tw</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

