import React, {
  useState, useRef,
} from 'react';
import PropTypes from 'prop-types';
import closeImage from '../../../images/admin/close.png';

function AddFilmPopup(props) {
  const { handleClose, handleSubmit } = props;
  const [newFilm, setNewFilm] = useState({
    name: '',
    description: '',
    duration: '',
    country: '',
  });

  const fileRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFilm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (

    <div className="popup active">
      <div className="popup__container">
        <div className="popup__content">
          <div className="popup__header">
            <h2 className="popup__title">
              Добавление фильма
              <span
                className="popup__dismiss"
                role="button"
                tabIndex={0}
                onClick={() => handleClose(false)}
                onKeyPress={(e) => { if (e.key === 'Enter') handleClose(false); }}
              >
                <img src={closeImage} alt="Закрыть" />
              </span>
            </h2>

          </div>
          <div className="popup__wrapper">
            <form method="post" acceptCharset="utf-8" onSubmit={(e) => handleSubmit(e, newFilm, fileRef.current.files[0])}>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Название фильма
                <input className="conf-step__input" type="text" placeholder="Например, &laquo;Гражданин Кейн&raquo;" name="name" required value={newFilm.name} onChange={(e) => handleChange(e)} />
              </label>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="description">
                Описание фильма
                <input className="conf-step__input" type="text" placeholder="Описание фильма" name="description" required value={newFilm.description} onChange={(e) => handleChange(e)} />
              </label>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="duration">
                Длительность фильма, в минутах
                <input className="conf-step__input" type="number" placeholder="Длительность" name="duration" required value={newFilm.duration} onChange={(e) => handleChange(e)} />
              </label>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="country">
                Страна производства
                <input className="conf-step__input" type="text" placeholder="Страна производства" name="country" required value={newFilm.country} onChange={(e) => handleChange(e)} />
              </label>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="poster">
                <input className="conf-step__input" type="file" accept="image/*" name="poster" required ref={fileRef} />
              </label>
              <div className="conf-step__buttons text-center">
                <input type="submit" value="Добавить фильм" className="conf-step__button conf-step__button-accent" />
                <button className="conf-step__button conf-step__button-regular" type="button">Отменить</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}

AddFilmPopup.propTypes = {
  handleClose: PropTypes.func,
  handleSubmit: PropTypes.func,
};

AddFilmPopup.defaultProps = {
  handleClose: () => {},
  handleSubmit: () => {},
};

export default AddFilmPopup;
