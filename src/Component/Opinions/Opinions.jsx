import React from 'react'
import '../../style/Opinions.css'
import User from  '../../assets/img/user.JPG'

export default function Opinions() {
  const testimonials = [
    {
      id: 1,
      name: "أحمد محمد",
      image: User, 
      testimonial: "كانت تجربتي مع عيادة الأسنان ممتازة. الطاقم الطبي محترف للغاية وودود، والنتائج فاقت توقعاتي. أنصح بشدة بزيارتهم لأي مشكلة في الأسنان.",
      status: " علاج تسوس وتركيب تقويم"
    },
    {
      id: 2,
      name: "سارة أحمد",
      image: User,
      testimonial: "أشكر الدكتور وفريقه على الرعاية الممتازة. كنت خائفة من علاج الأسنان لكنهم جعلوني أشعر بالراحة طوال الوقت. الألم كان أقل بكثير مما توقعت والنتيجة رائعة!",
      status: " زراعة أسنان"
    },
    {
      id: 3,
      name: "محمود عبد الرحمن",
      image: User,
      testimonial: "التقنيات المستخدمة في العيادة من أحدث ما يكون. الدكتور شرح لي كل خطوات العلاج بالتفصيل واه بمخاوفي. ابتسامتي الآن أجمل بكثير وأكثر ثقة.",
      status: " تبييض وتجميل أسنان"
    },
    {
      id: 4,
      name: "فاطمة علي",
      image: User,
      testimonial: "أفضل عيادة أسنان زرتها على الإطلاق. النظافة والتعقيم على أعلى مستوى، والأطباء ماهرون ولطيفون. لن أذهب إلى أي مكان آخر بعد الآن.",
      status: " علاج عصب وتركيب تاج"
    }
  ];
  return (
    <>
     <section className="testimonials-section py-5">
      <div className="testimonials-content">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title">آراء المرضى</h2>
            <div className="divider mx-auto"></div>
            <p className="section-subtitle">ماذا يقول عنا مرضانا الكرام</p>
          </div>

          <div className="row">
            {testimonials.map((item) => (
              <div key={item.id} className="col-lg-3 mb-4">
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="patient-image">
                      <img src={item.image} alt={`المريض ${item.name}`} />
                    </div>
                    <div className="patient-info">
                      <h5 className="patient-name">{item.name}</h5>
                      <span className="patient-status">{item.status}</span>
                    </div>
                  </div>
                  <div className="testimonial-body">
                    <p className="testimonial-text">
                      <i className="fas fa-quote-right quote-icon"></i>
                      {item.testimonial}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <a href="#" className="btn show">عرض المزيد من الآراء</a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}