/* eslint-disable max-lines */
export const NavbarItems: Array<INavbarItem> = [
  {
    id: 0,
    title: 'Рабочий стол',
    link: '/dashboard',
  },
  {
    id: 1,
    title: 'Отчеты',
    link: '/orders',
  },
  {
    id: 2,
    title: 'Закупки',
    link: '/purchases',
  },
  {
    id: 3,
    title: 'Складские документы',
    link: '/warehouse',
  },
  {
    id: 4,
    title: 'Продажи',
    link: '/sales',
  },
  {
    id: 5,
    title: 'Финансы',
    link: '/finances',
  },
  {
    id: 6,
    title: 'Справочники',
    subItems: [
      {
        id: 7,
        title: 'Номенклатура',
        link: '/nomenclatures',
      },
      {
        id: 8,
        title: 'Контрагенты',
        link: '/counterparties',
      },
      {
        id: 9,
        title: 'Услуги',
        link: '/services',
      },
    ],
  },
  {
    id: 10,
    title: 'Персонал',
    subItems: [
      {
        id: 11,
        title: 'Сотрудники',
        link: '/employees',
      },
      {
        id: 12,
        title: 'Должности',
        link: '/positions',
      },
    ],
  },
  {
    id: 13,
    title: 'Маркетинг',
    link: '/marketing',
  },
]

type INavbarItem = IWrapperNavItem | ILinkNavItem

interface IWrapperNavItem extends IBaseNavItem {
  subItems: Array<ILinkNavItem>
}

interface ILinkNavItem extends IBaseNavItem {
  link: string
}

interface IBaseNavItem {
  id: number
  title: string
}
