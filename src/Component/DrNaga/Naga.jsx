import React from "react";
import "../../style/Naga.css";
import MainPhoto from "../../assets/img/DR-AHMED.png";
import { FaVideo } from "react-icons/fa";

export default function Naga() {
  const now = new Date();
  const day = now.getDay(); // 1 = Monday
  const isMonday = day === 1;

  return (
    <>
      <section className="section-two about-us pt-5 bg-light">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="profile-card">
                <div className="profile-wrapper">
                  <img
                    src={MainPhoto}
                    alt="صورة الدكتور"
                    style={{
                      width: "100%",
                      display: "block",
                      margin: "0 auto",
                      borderRadius: "5px",
                    }}
                  />
                  <div className="social-media">
                    <div className="links-wrapper">
                      <a href="https://www.facebook.com/AboelnagaDC" aria-label="فيسبوك" target='_blank'>
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://www.tiktok.com/@AboelnagaDC" aria-label="تيك توك" target='_blank'>
                      <i class="fab fa-tiktok"></i>
                      </a>
                      <a href="https://wa.me/+201227599182" aria-label="لينكد إن" target='_blank'>
                        <i className="fab fa-whatsapp"></i>
                      </a>
                      <a href="https://www.instagram.com/aboelnagadc/" aria-label="انستغرام" target='_blank'>
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-7">
              <div className="info">
                <div className="doctor-title">
                  <h2>
                    <span className="fl">د.</span> أحمد أبو النجا
                  </h2>
                  <div className="specialization">
                    <i className="fas fa-tooth"></i> أخصائي طب وجراحة الفم
                    والأسنان
                  </div>
                </div>

                <p className="doctor-bio">
                  الدكتور أحمد أبو النجا بخبرة أكثر من 10 سنوات في مجال طب
                  الأسنان منذ تخرجه عام 2013. حاصل على بكالوريوس طب وجراحة الفم
                  والأسنان، ودبلوم متقدم في زراعة الأسنان والتجميل.
                  <br />
                  تخصص الدكتور أحمد في مجال علاج جذور الأسنان وتركيبات الأسنان
                  التجميلية، ويسعى دائمًا لمواكبة أحدث التقنيات في مجال طب
                  الأسنان لتقديم أفضل رعاية لمرضاه.
                </p>
                <hr />

                <div className="profile-about">
                  <div className="row">
                    <div className="col-md-6 w-100">
                      <li className="my-2">
                        <span className="cv">المؤهلات العلمية:</span> بكالوريوس
                        طب وجراحة الفم والأسنان (2013)
                      </li>
                      <li className="my-2">
                        <span className="cv">سنوات الخبرة:</span> +10 سنوات
                      </li>
                      <li className="my-2">
                        <span className="cv">المواعيد:</span> السبت إلى الخميس،
                        11 ص - 11 م
                      </li>
                      <li className="my-2">
                        <span className="cv">التخصص الدقيق:</span> علاج جذور
                        وتركيبات تجميلية
                      </li>
                      <li className="my-2">
                        <span className="cv">العنوان:</span> مركز النجا لطب
                        الأسنان، شارع الملك فيصل
                      </li>
                      <li className="my-2">
                        <span className="cv">البريد الإلكتروني:</span>{" "}
                        ask@drahmedaboelnaga.com
                      </li>
                    </div>
                    <div className="col-md-6"></div>
                  </div>

                  <div className="clear"></div>
                </div>

                <div className="btn-group">
                  <a
                    href="https://wa.me/+201227599182"
                    className="appointment-btn"
                    target="_blank"
                  >
                    حجز موعد <i className="far fa-calendar-alt"></i>
                  </a>
                  <a
                    href={isMonday ? "/consultation" : "#"} // رابط يعمل فقط يوم الاثنين
                    className={`contact-btn ${!isMonday ? "disabled" : ""}`}
                    aria-disabled={!isMonday} // يساعد في الوصول للمستخدمين ذوي الإعاقة
                  >
                    استشارة عبر الإنترنت <FaVideo />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
