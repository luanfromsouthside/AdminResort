import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Phòng',
        icon: { icon: 'home', pack: 'fas' },
        children: [
            {
                title: 'Danh sách phòng',
                link: '/home/room/management'
            },
            {
                title: 'Thêm phòng',
                link: '/home/room/add'
            }
        ]
    },
    {
        title: 'Hóa đơn',
        icon: { icon: 'file-invoice-dollar', pack: 'fas'},
        link: 'home/bill'
    },
    {
        title: 'Nhân viên',
        icon: { icon: 'id-card', pack: 'far' },
        children: [
            {
                title: 'Danh sách nhân viên',
                link: '/home/staff'
            },
            {
                title: 'Thêm nhân viên',
                link: '/home/staff/add'
            }
        ]
    }
]