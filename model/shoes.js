function SanPham(idSP,altSP,tenSP,giaSP,moTaSP,sizeSP,shortDesSP,soldSP,imgSP,relSP) {
    //thuộc tính
    this.id = idSP;
    this.alias = altSP;
    this.name = tenSP;
    this.price = giaSP;
    this.description = moTaSP;
    this.size = sizeSP;
    this.shortDescription = shortDesSP;
    this.quantity = soldSP;
    this.image = imgSP;
    this.relatedProducts = relSP || [];
}