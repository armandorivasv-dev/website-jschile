export interface StaffMember {
  id: string;
  fullName: string;
  linkedin: string;
  date: string;
  role: string;
  imageUrl: string;
  isExStaff: boolean;
}

export const DATA_STAFF: StaffMember[] = [
  // Ex Staff
  {
    id: '1',
    fullName: 'Felipe Torres',
    linkedin: '#',
    date: '2021 - 2022',
    role: 'Staff',
    imageUrl: 'https://i.pravatar.cc/150?u=felipetorres',
    isExStaff: true,
  },
  {
    id: '2',
    fullName: 'Pillippa Pérez',
    linkedin: '#',
    date: '2021 - 2022',
    role: 'Staff',
    imageUrl: 'https://i.pravatar.cc/150?u=pillippaperez',
    isExStaff: true,
  },
  {
    id: '3',
    fullName: 'José Lezama',
    linkedin: '#',
    date: '2021 - 2023',
    role: 'Staff',
    imageUrl: 'https://i.pravatar.cc/150?u=joselezama',
    isExStaff: true,
  },
  {
    id: '4',
    fullName: 'Francisco Cordero',
    linkedin: '#',
    date: '2021 - 2023',
    role: 'Staff',
    imageUrl: 'https://i.pravatar.cc/150?u=franciscocordero',
    isExStaff: true,
  },
  {
    id: '5',
    fullName: 'Leslie Herrera',
    linkedin: '#',
    date: '2021 - 2023',
    role: 'Staff',
    imageUrl: 'https://i.pravatar.cc/150?u=leslieherrera',
    isExStaff: true,
  },
  // Actuales Staff
  {
    id: '6',
    fullName: 'Armando Rivas',
    linkedin: '#',
    date: '2023 - Presente',
    role: 'Staff',
    imageUrl: 'https://i.pravatar.cc/150?u=armandorivas',
    isExStaff: false,
  },
  {
    id: '7',
    fullName: 'Samuel Angulo',
    linkedin: '#',
    date: '2023 - Presente',
    role: 'Staff',
    imageUrl: 'https://i.pravatar.cc/150?u=samuelangulo',
    isExStaff: false,
  },
  {
    id: '8',
    fullName: 'Javier Vargas',
    linkedin: '#',
    date: '2023 - Presente',
    role: 'Staff',
    imageUrl: 'https://i.pravatar.cc/150?u=javiervargas',
    isExStaff: false,
  },
];
