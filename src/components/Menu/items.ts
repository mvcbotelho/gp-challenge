import { ReactComponent as Home } from 'assets/icons/home.svg';
import { ReactComponent as Search } from 'assets/icons/search.svg';
import { ReactComponent as Live } from 'assets/icons/live.svg';
import { ReactComponent as Categories } from 'assets/icons/categories.svg';
import { ReactComponent as Account } from 'assets/icons/account_circle.svg';

type MenuItem = {
  id: string;
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const menuItems: MenuItem[] = [
  {
    id: 'search',
    name: 'Busca',
    icon: Search,
  },
  {
    id: 'home',
    name: 'Início',
    icon: Home,
  },
  {
    id: 'live',
    name: 'Agora na Globo',
    icon: Live,
  },
  {
    id: 'categories',
    name: 'Categorias',
    icon: Categories,
  },
  {
    id: 'account',
    name: 'Minha Conta',
    icon: Account,
  },
];
