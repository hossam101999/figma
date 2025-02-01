import { Component } from '@angular/core';

@Component({
  selector: 'app-number-parent',
  standalone: true,
  imports: [],
  templateUrl: './number-parent.component.html',
  styleUrl: './number-parent.component.css'
})
export class NumberParentComponent {
  headerData = {
    name: 'الشركة الألمانية للإبادة',
    country: 'المملكة الأردنية الهاشمية',
    balance: 5000,
    extensions: 9,
  };

  tableData = [
    {
      client: 'الشركة الألمانية للإبادة',
      amount: 61890,
      localMinutes: 7654,
      internationalMinutes: 122,
      assignedBy: 'عبدالرحيم إسماعيل ناصف',
      assignedDate: '01/12/2024',
      unassignDate: '-',
    },
    // Add more rows as needed
  ];

  footerData = {
    createdBy: 'عبدالرحيم إسماعيل ناصف',
    creationDate: '01/12/2024',
    creationTime: '04:30 PM',
  };
}
