# Estrutura de Componentes

Esta pasta contém todos os componentes React organizados seguindo as melhores práticas de desenvolvimento.

## 📁 Estrutura de Pastas

```
src/components/
├── auth/              # Componentes de autenticação
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── PrivateRoute.jsx
│   └── index.js
├── layouts/           # Componentes de layout
│   ├── PrivateLayout.jsx
│   ├── PublicLayout.jsx
│   └── index.js
├── navigation/        # Componentes de navegação
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── HeaderLogado.jsx
│   ├── HeroCampeonato.jsx
│   └── index.js
├── pages/            # Componentes de página
│   ├── HomeLogada.jsx
│   ├── Campeonato.jsx
│   ├── Inicio.jsx
│   ├── HeroCampeonato.jsx
│   ├── HomePageWrapper.jsx
│   └── index.js
├── ui/               # Componentes de UI reutilizáveis
│   └── index.js
├── index.js          # Exportações centralizadas
└── README.md         # Este arquivo
```

## 🎯 Categorias de Componentes

### 🔐 Auth (`/auth`)
Componentes relacionados à autenticação e autorização:
- **Login**: Formulário de login
- **Register**: Formulário de cadastro
- **PrivateRoute**: Rota protegida que verifica autenticação

### 🏗️ Layouts (`/layouts`)
Componentes que definem a estrutura geral das páginas:
- **PrivateLayout**: Layout para páginas autenticadas
- **PublicLayout**: Layout para páginas públicas

### 🧭 Navigation (`/navigation`)
Componentes de navegação e elementos de interface:
- **Header**: Cabeçalho da aplicação
- **Footer**: Rodapé da aplicação
- **HeaderLogado**: Cabeçalho para usuários logados
- **HeroCampeonato**: Seção hero para páginas de campeonato

### 📄 Pages (`/pages`)
Componentes que representam páginas completas:
- **HomeLogada**: Página inicial para usuários logados
- **Campeonato**: Página de gerenciamento de campeonatos
- **Inicio**: Página inicial pública
- **HeroCampeonato**: Seção hero da página de campeonato
- **HomePageWrapper**: Wrapper que decide entre página pública ou privada

### 🎨 UI (`/ui`)
Componentes de interface reutilizáveis (botões, modais, cards, etc.):
- *Vazio por enquanto - adicione componentes reutilizáveis aqui*

## 📦 Como Importar

### Importação Individual
```javascript
import { Login, Register } from './components/auth';
import { Header, Footer } from './components/navigation';
```

### Importação Centralizada
```javascript
import { 
  Login, 
  Register, 
  Header, 
  Footer, 
  PrivateLayout 
} from './components';
```

## ✅ Benefícios desta Organização

1. **Separação de Responsabilidades**: Cada pasta tem uma função específica
2. **Facilidade de Manutenção**: Fácil localizar e modificar componentes
3. **Escalabilidade**: Estrutura preparada para crescimento
4. **Imports Limpos**: Arquivos index.js facilitam as importações
5. **Padrão Consistente**: Segue convenções da comunidade React

## 🚀 Próximos Passos

- Adicionar componentes reutilizáveis na pasta `ui/`
- Criar testes para os componentes
- Implementar Storybook para documentação visual
- Adicionar PropTypes ou TypeScript para tipagem
