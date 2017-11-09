-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-11-2017 a las 19:21:54
-- Versión del servidor: 10.1.16-MariaDB
-- Versión de PHP: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `solin`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comprobantes`
--

CREATE TABLE `comprobantes` (
  `id_Comprobantes` int(11) NOT NULL,
  `Numero` int(3) NOT NULL,
  `Factura` varchar(1000) NOT NULL,
  `id_Solin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamento`
--

CREATE TABLE `departamento` (
  `id_Departamento` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Seudonimo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `depto-proyecto`
--

CREATE TABLE `depto-proyecto` (
  `id_Departamento` int(11) NOT NULL,
  `id_Proyecto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `periodo`
--

CREATE TABLE `periodo` (
  `id_periodo` int(11) NOT NULL,
  `presupuesto` int(100) NOT NULL,
  `inicio_periodo` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fin_periodo` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos`
--

CREATE TABLE `permisos` (
  `id_Permisos` int(3) NOT NULL,
  `Accion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto`
--

CREATE TABLE `proyecto` (
  `Nombre` varchar(100) NOT NULL,
  `id_Responsable` int(11) NOT NULL,
  `id_proyecto` int(11) NOT NULL,
  `clave` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recurso`
--

CREATE TABLE `recurso` (
  `id_Recurso` int(11) NOT NULL,
  `Monto_total` int(100) NOT NULL,
  `clave_Proyecto` int(11) NOT NULL,
  `id_usuario_asignador` int(11) NOT NULL,
  `Fecha_de_asignacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Monto_periodo` int(100) NOT NULL,
  `id_Periodo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id_Rol` int(11) NOT NULL,
  `Nombramiento` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rolpermiso`
--

CREATE TABLE `rolpermiso` (
  `id_Permisos` int(11) NOT NULL,
  `id_Rol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solin`
--

CREATE TABLE `solin` (
  `id_Solin` int(11) NOT NULL,
  `id_Proyecto` int(11) NOT NULL,
  `Folio` varchar(100) NOT NULL,
  `Monto` int(100) NOT NULL,
  `Descripcion` varchar(1000) NOT NULL,
  `Pago_a_nombre` varchar(100) NOT NULL,
  `Fecha_de_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Estatus` int(1) NOT NULL,
  `id_usuario_creador` int(11) NOT NULL,
  `id_usuario_aprueba` int(11) NOT NULL,
  `id_usuario_comprueba` int(11) NOT NULL,
  `id_periodo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_Usuario` int(11) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `fecha_de_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_de_modificacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Nombre` varchar(100) NOT NULL,
  `id_Departamento` int(11) NOT NULL,
  `id_Rol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comprobantes`
--
ALTER TABLE `comprobantes`
  ADD PRIMARY KEY (`id_Comprobantes`),
  ADD KEY `id_Solin` (`id_Solin`);

--
-- Indices de la tabla `departamento`
--
ALTER TABLE `departamento`
  ADD PRIMARY KEY (`id_Departamento`);

--
-- Indices de la tabla `depto-proyecto`
--
ALTER TABLE `depto-proyecto`
  ADD PRIMARY KEY (`id_Departamento`,`id_Proyecto`),
  ADD KEY `depto-proyecto_ibfk_2` (`id_Proyecto`);

--
-- Indices de la tabla `periodo`
--
ALTER TABLE `periodo`
  ADD PRIMARY KEY (`id_periodo`);

--
-- Indices de la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD PRIMARY KEY (`id_Permisos`);

--
-- Indices de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD PRIMARY KEY (`id_proyecto`),
  ADD KEY `id_Responsable` (`id_Responsable`);

--
-- Indices de la tabla `recurso`
--
ALTER TABLE `recurso`
  ADD PRIMARY KEY (`id_Recurso`),
  ADD KEY `id_Periodo` (`id_Periodo`),
  ADD KEY `clave_Proyecto` (`clave_Proyecto`),
  ADD KEY `id_usuario_asignador` (`id_usuario_asignador`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id_Rol`);

--
-- Indices de la tabla `rolpermiso`
--
ALTER TABLE `rolpermiso`
  ADD PRIMARY KEY (`id_Permisos`,`id_Rol`),
  ADD KEY `id_Rol` (`id_Rol`);

--
-- Indices de la tabla `solin`
--
ALTER TABLE `solin`
  ADD PRIMARY KEY (`id_Solin`),
  ADD KEY `id_Proyecto` (`id_Proyecto`),
  ADD KEY `id_usuario_creador` (`id_usuario_creador`),
  ADD KEY `id_usuario_aprueba` (`id_usuario_aprueba`),
  ADD KEY `id_usuario_comprueba` (`id_usuario_comprueba`),
  ADD KEY `id_periodo` (`id_periodo`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_Usuario`),
  ADD KEY `id_Departamento` (`id_Departamento`),
  ADD KEY `id_Rol` (`id_Rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comprobantes`
--
ALTER TABLE `comprobantes`
  MODIFY `id_Comprobantes` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `departamento`
--
ALTER TABLE `departamento`
  MODIFY `id_Departamento` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `periodo`
--
ALTER TABLE `periodo`
  MODIFY `id_periodo` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `permisos`
--
ALTER TABLE `permisos`
  MODIFY `id_Permisos` int(3) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  MODIFY `id_proyecto` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `recurso`
--
ALTER TABLE `recurso`
  MODIFY `id_Recurso` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id_Rol` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `solin`
--
ALTER TABLE `solin`
  MODIFY `id_Solin` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_Usuario` int(11) NOT NULL AUTO_INCREMENT;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comprobantes`
--
ALTER TABLE `comprobantes`
  ADD CONSTRAINT `comprobantes_ibfk_1` FOREIGN KEY (`id_Solin`) REFERENCES `solin` (`id_Solin`) ON DELETE CASCADE;

--
-- Filtros para la tabla `depto-proyecto`
--
ALTER TABLE `depto-proyecto`
  ADD CONSTRAINT `depto-proyecto_ibfk_1` FOREIGN KEY (`id_Departamento`) REFERENCES `departamento` (`id_Departamento`) ON DELETE CASCADE,
  ADD CONSTRAINT `depto-proyecto_ibfk_2` FOREIGN KEY (`id_Proyecto`) REFERENCES `proyecto` (`id_proyecto`) ON DELETE CASCADE;

--
-- Filtros para la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD CONSTRAINT `proyecto_ibfk_2` FOREIGN KEY (`id_Responsable`) REFERENCES `usuario` (`id_Usuario`);

--
-- Filtros para la tabla `recurso`
--
ALTER TABLE `recurso`
  ADD CONSTRAINT `recurso_ibfk_1` FOREIGN KEY (`id_Periodo`) REFERENCES `periodo` (`id_periodo`),
  ADD CONSTRAINT `recurso_ibfk_2` FOREIGN KEY (`clave_Proyecto`) REFERENCES `proyecto` (`id_proyecto`),
  ADD CONSTRAINT `recurso_ibfk_3` FOREIGN KEY (`id_usuario_asignador`) REFERENCES `usuario` (`id_Usuario`);

--
-- Filtros para la tabla `rolpermiso`
--
ALTER TABLE `rolpermiso`
  ADD CONSTRAINT `rolpermiso_ibfk_1` FOREIGN KEY (`id_Permisos`) REFERENCES `permisos` (`id_Permisos`) ON DELETE CASCADE,
  ADD CONSTRAINT `rolpermiso_ibfk_2` FOREIGN KEY (`id_Rol`) REFERENCES `rol` (`id_Rol`) ON DELETE CASCADE;

--
-- Filtros para la tabla `solin`
--
ALTER TABLE `solin`
  ADD CONSTRAINT `solin_ibfk_1` FOREIGN KEY (`id_Proyecto`) REFERENCES `proyecto` (`id_proyecto`),
  ADD CONSTRAINT `solin_ibfk_2` FOREIGN KEY (`id_usuario_creador`) REFERENCES `usuario` (`id_Usuario`),
  ADD CONSTRAINT `solin_ibfk_3` FOREIGN KEY (`id_usuario_aprueba`) REFERENCES `usuario` (`id_Usuario`),
  ADD CONSTRAINT `solin_ibfk_4` FOREIGN KEY (`id_usuario_comprueba`) REFERENCES `usuario` (`id_Usuario`),
  ADD CONSTRAINT `solin_ibfk_5` FOREIGN KEY (`id_periodo`) REFERENCES `periodo` (`id_periodo`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`id_Departamento`) REFERENCES `departamento` (`id_Departamento`),
  ADD CONSTRAINT `usuario_ibfk_2` FOREIGN KEY (`id_Rol`) REFERENCES `rol` (`id_Rol`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
