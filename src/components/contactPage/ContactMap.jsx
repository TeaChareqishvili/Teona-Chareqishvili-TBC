const ContactMap = () => {
  return (
    <div className="map-wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52164.37707624731!2d-120.79788751736054!3d35.19965417223765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ecf834e9cc5417%3A0x5c42c6f63f4629b6!2zQXZpbGEgQmVhY2gsIOGDmeGDkOGDmuGDmOGDpOGDneGDoOGDnOGDmOGDkCwg4YOQ4YOb4YOU4YOg4YOY4YOZ4YOY4YOhIOGDqOGDlOGDlOGDoOGDl-GDlOGDkeGDo-GDmuGDmCDhg6jhg6Lhg5Dhg6Lhg5Thg5Hhg5g!5e0!3m2!1ska!2sge!4v1710873763360!5m2!1ska!2sge"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        title="map"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export { ContactMap };
