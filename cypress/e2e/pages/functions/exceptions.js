export class Exceptions {


    product_area = document.getElementById('get_productArea')
    area_px_to_mm_ratio = document.getElementById('getAreaPxToMmRatio')

    exceptions() {
        console.log(this.product_area, this.area_px_to_mm_ratio)
        if (this.product_area) {
            this.product_area.addEventListener('click', () => {
                alert('You clicked the productArea')
            })
        }
        if (this.area_px_to_mm_ratio) {
            this.area_px_to_mm_ratio.addEventListener('click', () => {
                alert('You clicked the getAreaPxToMmRatio')
            })
        }
    }
}