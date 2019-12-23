/**
 * @Author: Younger
 * @Date: 2019-05-15
 * @Time: 15:40
 */
// exports.area = width => {
//     return width * width;
// }
// exports.perimeter = width => {
//     return width * 4;
// }

module.exports = {
    area(width){
        return width * width;
    },
    perimeter(width){
        return 4 * width
    },
    time: () => {
        setTimeout(() => {
            console.log('第一');
        }, 3000);
        console.log('第二');
    }
}
