import React from 'react'
import '../../style/Footer.css'

export default function Footer() {
    return (
        <>
            <footer class="text-light pt-4">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <h2 className='pb-4'>عيادات الدكتور أحمد أبوالنجا</h2>
                            <p>نوفر لك أفضل رعاية لأسنانك مع أحدث التقنيات.</p>
                            <p><i class="fas fa-phone"></i> الهاتف - قويسنا : 01227599182</p>
                            <p><i class="fas fa-phone"></i> الهاتف - طة شبرا: 01040467770   </p>
                            <p><i class="fas fa-envelope"></i> البريد: info@clinic.com</p>
                        </div>

                        <div class="col-md-4">
                            <h4>فروعنا</h4>
                            <ul class="list-unstyled">
                                <li  className='my-4'><i class="fas fa-map-marker-alt"></i> الفرع الرئيسي: قويسنا - المنوفية </li>
                                <li className='my-4'><i class="fas fa-map-marker-alt"></i> فرع طه شبرا -قويسنا -المنوفية </li>
                                <li className='my-4'><i class="fas fa-map-marker-alt"></i> قريبا:  شبين الكوم - المنوفية </li>
                            </ul>
                        </div>

                        <div class="col-md-4">
                            <h5>تابعنا على</h5>
                            <a href="https://www.facebook.com/AboelnagaDC" class="text-light "><i class="fab fa-facebook fa-2x"></i></a>
                            <a href="https://www.instagram.com/aboelnagadc/" class="text-light me-3"><i class="fab fa-instagram fa-2x"></i></a>
                            <a href="#" class="text-light me-3"><i class="fab fa-twitter fa-2x"></i></a>
                            <a href="https://wa.me/+201227599182" class="text-light me-3"><i class="fab fa-whatsapp fa-2x"></i></a>
                        </div>
                    </div>

                    <div class="text-center py-3 mt-3 border-top">
                        <p class="mb-0">جميع الحقوق محفوظة &copy; 2025
                            عيادات الدكتور أحمد أبوالنجا </p>
                    </div>
                </div>
            </footer></>
    )
}
