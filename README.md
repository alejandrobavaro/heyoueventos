# heyou eventos


# Documentación de Estilos - Heyou! Eventos

## 1. Paleta de Colores

### Colores Principales
| Color         | Código    | Uso                              |
|---------------|-----------|----------------------------------|
| Negro fondo   | `#14141E` | Fondo principal                  |
| Blanco        | `#FFFFFF` | Textos principales               |
| Blanco 90%    | `rgba(255,255,255,0.9)` | Textos secundarios        |

### Colores de Íconos
| Color         | Código    | Uso                              |
|---------------|-----------|----------------------------------|
| Rojo          | `#FF5252` | Ícono Inicio                     |
| Amarillo      | `#FFD740` | Ícono Galería                    |
| Naranja       | `#FF9100` | Ícono Testimonios                |
| Verde         | `#69F0AE` | Ícono Servicios                  |
| Celeste       | `#40C4FF` | Ícono Planificación              |
| Violeta       | `#E040FB` | Ícono Eventos                    |
| Turquesa      | `#1DE9B6` | Efectos especiales               |

### Gradiente Animado
```scss
background: linear-gradient(90deg, #FF5252, #FFD740, #FF9100, #69F0AE, #40C4FF, #E040FB, #1DE9B6);
background-size: 400% 100%;
animation: gradientShift 12s ease infinite;
```

## 2. Tipografía

### Fuentes
```scss
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap');
```

| Familia        | Peso       | Uso                              |
|----------------|------------|----------------------------------|
| `'Quicksand'`  | `400, 600` | Textos generales                 |
| `'Quicksand'`  | `600`      | Títulos y elementos destacados   |

## 3. Estructura de Componentes

### Header
```scss
.heyou-header {
  background-color: rgba(20, 20, 30, 0.98);
  backdrop-filter: blur(8px);
  font-family: 'Quicksand', sans-serif;
}
```

#### Elementos:
- `.header-accent`: Barra superior con gradiente animado
- `.header-logo`: Contenedor del logo
- `.menu-toggle`: Botón hamburguesa (solo mobile)
- `.nav-links`: Contenedor de los items de navegación

### Items de Menú
```scss
.nav-link {
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  
  &:hover {
    .nav-icon {
      transform: scale(1.2);
    }
    .nav-underline {
      width: calc(100% - 3rem);
    }
  }
  
  &.active {
    font-weight: 600;
    color: white;
  }
}
```

## 4. Efectos y Animaciones

### Animación de Gradiente
```scss
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### Transiciones
```scss
transition: all 0.3s ease; // Para hover states
transition: transform 0.3s ease; // Para transformaciones
```

## 5. Breakpoints Responsive

| Breakpoint   | Clase Bootstrap | Uso                              |
|--------------|-----------------|----------------------------------|
| < 992px      | `d-lg-none`     | Menú hamburguesa visible         |
| ≥ 992px      | -               | Menú horizontal siempre visible  |

## 6. Estructura de Archivos SCSS

```
assets/scss/
├── _01-General/
│   ├── _App.scss          // Estilos base
│   ├── _SweetAlert.scss   // Modales
│   └── _Toastify.scss     // Notificaciones
└── _03-Componentes/
    ├── _Header.scss       // Estilos del header
    ├── _HeroBanner.scss   // Banner principal
    └── ...                // Demás componentes
```

## 7. Guía de Implementación

### Para nuevos componentes:
1. Crear archivo JSX en `src/components/`
2. Crear archivo SCSS en `assets/scss/_03-Componentes/`
3. Importar estilos en el componente:
   ```jsx
   import "../assets/scss/_03-Componentes/_NombreComponente.scss";
   ```
4. Seguir la estructura de BEM (Block-Element-Modifier):
   ```scss
   .block {}
   .block__element {}
   .block--modifier {}
   ```

### Para mantener consistencia:
- Usar siempre la paleta de colores definida
- Respetar los breakpoints establecidos
- Mantener las mismas transiciones y efectos

## 8. Ejemplo de Componente Nuevo

**Button.jsx**
```jsx
import React from "react";
import "../assets/scss/_03-Componentes/_Button.scss";

const Button = ({ children, color = "red" }) => {
  return (
    <button className={`heyou-button heyou-button--${color}`}>
      {children}
    </button>
  );
};

export default Button;
```

**_Button.scss**
```scss
.heyou-button {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &--red {
    background-color: #FF5252;
    color: white;
  }
  
  &--yellow {
    background-color: #FFD740;
    color: #14141E;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
}
```# heyoueventos
