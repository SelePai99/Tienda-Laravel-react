// src/components/Usuario.js

import React from 'react';
import UsuarioNavbar from './Usuario_navbar'; // Importa el componente del navbar de usuario
import './Usuario.css';

const Usuario = () => {
  return (
    <div>
      {/* Agrega el navbar de usuario */}
      <UsuarioNavbar />

      {/* Contenido de la página de usuario */}
      <div className="row">
        {/* Columna izquierda */}
        <div className="col-sm-4">
          <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Tienda</a>
            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Categorías</a>
            <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Nombre de Usuario</a>
            <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Profile</a>
            <a className="nav-link" id="v-pills-logout-tab" data-toggle="pill" href="#v-pills-logout" role="tab" aria-controls="v-pills-logout" aria-selected="false">Finalizar Sesión</a>
          </div>
        </div>
        {/* Columna derecha */}
        <div className="col-sm-8">
          <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"></div>
            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">Contenido de las Categorías</div>
            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">Contenido del Nombre de Usuario</div>
            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">Contenido del Profile</div>
            <div className="tab-pane fade" id="v-pills-logout" role="tabpanel" aria-labelledby="v-pills-logout-tab">Contenido de Finalizar Sesión</div>
          </div>
          <div className="content-box">Cuadro 1</div>
          <div className="content-box">Cuadro 2</div>
          <div className="content-box">Cuadro 3</div>
        </div>
      </div>
    </div>
  );
};

export default Usuario;
