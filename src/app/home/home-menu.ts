import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Phòng',
        icon: { icon: 'home', pack: 'fas' },
        expanded: true,
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
        children: [
            {
                title:'Danh sách hóa đơn',
                
            },
            {
                title: 'Đặt phòng'
            },
            {
                title: 'Thanh toán'
            }
        ]
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
    },
    {
        title: 'Khách hàng',
        icon: {icon: 'users', pack: 'fas'},
        children: [
            {
                title: 'Danh sách khách hàng',
                link: '/home/user'
            },
            {
                title: 'Thêm khách hàng',
                link: '/home/user/add'
            }
        ]
    },
    {
        title: 'Vật tư',
        icon: { icon: 'tv', pack: 'fas'},
        children: [
            {
                title: 'Danh sách vật tư'
            },
            {
                title: 'Thêm vật tư'
            }
        ]
    }
]