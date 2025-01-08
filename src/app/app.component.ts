import { Component, SimpleChanges } from '@angular/core'

const CLIENT_KEY = '625ed9c8-1b17-4c40-9d34-d4a3f07cfcfb'
const API_KEY = 'dd16f157-f22f-49a2-bdab-dc8920b79f66'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
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
			price: '66.000',
			amount: 66000,
			sale: 30000
		},
		{
			id: 2,
			name: 'Trách nhiệm dân sự & người ngồi trên xe',
			icon: '20k.png',
			price: '86.000',
			amount: 86000,
			sale: 40000
		}
	]

	isShowInfo = false
	isOpen = false
	selectPackage: any = this.packages[0]
	qrImage: string = ''
	discountCode: string = ''
	totalPrice: number = 0
	startDate: Date = new Date()
	endDate: Date = new Date(this.startDate.getFullYear() + 1, this.startDate.getMonth(), this.startDate.getDate())

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['selectPackage'] && changes['selectPackage']?.currentValue)
			this.totalPrice = this.selectPackage.amount - this.selectPackage.sale
	}

	handleKeyDown(event: KeyboardEvent): void {
		if (event.key === 'Enter' || event.key === 'Tab') {
			const inputEl = event.target as HTMLInputElement
			this.discountCode = inputEl.value

			if (this.discountCode !== '') this.totalPrice = this.selectPackage.amount - this.selectPackage.sale
		}
	}

	handleQr(bankInfo: any) {
		const body = {
			accountNo: bankInfo.so_tk,
			accountName: bankInfo.chu_tk,
			acqId: bankInfo.bin,
			amount: bankInfo.so_tien,
			addInfo: bankInfo.nd_ck,
			format: 'text',
			template: 'compact'
		}

		fetch('https://api.vietqr.io/v2/generate', {
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': API_KEY,
				'x-client-id': CLIENT_KEY
			},
			body: JSON.stringify(body),
			method: 'POST'
		})
			.then((res) => res.json())
			.then((data) => {
				if (data) this.qrImage = data.data?.qrDataURL
			})
			.catch((error) => {
				console.error('Error:', error)
			})
	}

	handleSubmit() {
		this.isOpen = true
		const bankInfo = {
			bin: '970437',
			ma: 'HDBANK',
			ma_nh: 'HDB',
			so_tk: '0906128524',
			chu_tk: 'NGUYEN THI DUNG',
			so_tien: 86000.0,
			nd_ck: 'Ma thanh toan:20250009'
		}

		this.handleQr(bankInfo)
	}

	closeDialog() {
		this.isOpen = false
	}
}
