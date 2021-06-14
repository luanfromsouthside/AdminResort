import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: ' Phòng',
        icon: { icon: 'home', pack: 'fas' },
        expanded: true,
        children: [
            {
                title: 'Loại phòng',
                link: '/home/room/room-type'
            },
            {
                title: 'Danh sách phòng',
                link: '/home/room'
            },
            {
                title: 'Thêm phòng',
                link: '/home/room/add'
            }
        ]
    },
    {
        title: ' Hóa đơn',
        icon: { icon: 'file-invoice-dollar', pack: 'fas'},
        children: [
            {
                title:'Danh sách hóa đơn',
                link: '/home/booking'
            },
            {
                title: 'Đặt phòng',
                link: '/home/booking/new'
            }
        ]
    },
    {
        title: ' Nhân viên',
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
        title: ' Khách hàng',
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
        title: ' Dịch vụ',
        icon: {icon: 'concierge-bell', pack: 'fas'},
        children: [
            {
                title: 'Danh sách dịch vụ',
                link: '/home/service'
            },
            {
                title: 'Thêm dịch vụ',
                link: '/home/service/add'
            }
        ]
    },
    {
        title: ' Vật tư',
        icon: { icon: 'tv', pack: 'fas'},
        children: [
            {
                title: 'Danh sách vật tư',
                link: '/home/supply'
            },
            {
                title: 'Thêm vật tư',
                link: '/home/supply/add'
            }
        ]
    },
    {
        title: ' Voucher',
        icon: { icon: 'gift', pack: 'fas'},
        children: [
            {
                title: 'Danh sách voucher',
                link: '/home/voucher'
            },
            {
                title: 'Thêm voucher',
                link: '/home/voucher/add'
            }
        ]
    }
]