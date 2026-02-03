import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ngfor-vs-for',
  imports: [],
  templateUrl: './structural-directive-ngfor-vs-for.component.html',
  styleUrl: './structural-directive-ngfor-vs-for.component.scss',
})
export class StructuralDirectiveNgforVsForComponent {
  employees: any[] = [
    {
      empName: 'Devendra',
      empNumber: 25,
      empEmail: 'devendra@example.com',
      empDept: 'Developer',
    },
    {
      empName: 'Suraj',
      empNumber: 24,
      empEmail: 'suraj@example.com',
      empDept: 'Designer',
    },
    {
      empName: 'Shubham',
      empNumber: 27,
      empEmail: 'shubham@example.com',
      empDept: 'Manager',
    },
    {
      empName: 'Akshay',
      empNumber: 23,
      empEmail: 'akshay@example.com',
      empDept: 'Tester',
    },
  ];

  companyList: string[] = [
    'Google',
    'Apple',
    'Microsoft',
    'Amazon',
    'Facebook',
  ];
}
