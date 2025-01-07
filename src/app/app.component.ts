import { Component } from '@angular/core'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	menuItems = [
		{
			title: 'Về VNI',
			link: ''
		},
		{
			title: 'Sản phẩm',
			link: ''
		},
		{
			title: 'Tin tức',
			link: ''
		},
		{
			title: 'Tuyển dụng',
			link: ''
		},
		{
			title: 'Tra cứu GCN',
			link: ''
		}
	]

	benefits = [
		{
			img: 'patient.png',
			title: 'Thiệt hại về người',
			money: '150 triệu',
			text: '/người/vụ'
		},
		{
			img: 'vespa.png',
			title: 'Thiệt hại về tài sản',
			money: '50 triệu',
			text: '/người/vụ'
		},
		{
			img: 'driver.png',
			title: 'Người ngồi trên xe',
			money: '10 triệu',
			text: '/người/vụ'
		}
	]

	packages = [
		{
			id: 1,
			name: 'Trách nhiệm dân sự',
			tag: 'Đầy đủ',
			icon: '50k.png',
			price: '66.000'
		},
		{
			id: 2,
			name: 'Trách nhiệm dân sự & người ngồi trên xe',
			icon: '20k.png',
			price: '86.000'
		}
	]

	isShowInfo = false
	isOpen = false
	selectPackage: any = this.packages[0]
	startDate: Date = new Date()
	endDate: Date = new Date(this.startDate.getFullYear() + 1, this.startDate.getMonth(), this.startDate.getDate())

	handleSubmit() {
		this.isOpen = true
	}

	closeDialog() {
		this.isOpen = false
	}
}
