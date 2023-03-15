const Jimp = require('jimp');

export class imageConverter {

    static compareImages = (image1: any, image2: any) => {

        return new Promise((resolve, reject) => {

            const getImg1 = new Promise((resolve, reject) => {
                Jimp.read(image1, (err: any, lenna: any) => {
                    if (err) throw err;
                    resolve(
                        lenna.normalize().resize(256, 256).greyscale().opaque()
                    );
                });
            });

            const getImg2 = new Promise((resolve, reject) => {
                Jimp.read(image2, (err: any, lenna: any) => {
                    if (err) throw err;
                    resolve(
                        lenna.normalize().resize(256, 256).greyscale().opaque()
                    );
                });
            });


            return Promise.all([getImg1, getImg2])
                .then((values) => {
                    const [img1, img2] = values;
                    const diff = Jimp.diff(img1, img2, 0.1);

                    return diff.percent;
                })
                .catch((reason) => {
                    console.log(reason);
                });

        });
    }
}