export default function Contact() {
  return (
    <>
      <div>
        <h1 class="heading-popup heading-popup-contact">Contact</h1>
        <div className="popup-card popup-card-contact">
            <div class="pop-upBox-contact">
                <div class="gmaps">
                    <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Palmerah%20%20Kec.%20Palmerah%20%20Kota%20Jakarta%20Barat%20%20Daerah%20Khusus%20Ibukota%20Jakarta%2011480&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
                <div class="contact-content">
                    <div class="contact-address">
                        <h1>Studio 1</h1>
                        <p>Palmerah</p>
                        <p>Kec. Palmerah</p>
                        <p>Kota Jakarta Barat</p>
                        <p>Daerah Khusus Ibukota Jakarta 11480</p>
                        <div class="address-call">
                            <div class="email-address">
                                <span>litahusin@gmail.com</span>
                            </div>
                            <div class="email-address">
                                <span>0812-8569-4658</span>
                            </div>
                        </div>
                        <div class="sosmed">
                        </div>
                    </div>
                    <div class="contact-form">
                        <h1>Contact the artist</h1>
                        <div class="form">
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <textarea cols="30" rows="3" placeholder="Message"></textarea>
                            <button>SEND</button>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
      </div>
    </>
  );
}