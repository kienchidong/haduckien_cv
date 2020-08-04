<template>
    <div class="root text-left">
        <section >
            <h4>Mục Tiêu Nghề nghiệp:</h4>
            <hr>
            <p>
            <ul>
                <li>
                    Học hỏi v&agrave; n&acirc;ng cao kiến thức chuy&ecirc;n m&ocirc;n cũng như c&oacute; th&ecirc;m kinh nghiệm để g&oacute;p phần x&acirc;y dựng v&agrave; ph&aacute;t triển c&ocirc;ng ty m&igrave;nh c&oacute; cơ hội tham gia
                </li>
                <li>
                    Trở th&agrave;nh lập tr&igrave;nh vi&ecirc;n PHP trong v&ograve;ng 2 năm tới.
                </li>
            </ul>
            </p>
        </section>
        <section >
            <h4>Học Vấn:</h4>
            <hr>
            <detail-component
            school-name="Đại Học Mỏ Địa Chất"
            time=" 9/2015 - Hiện tại"
            special="Công Nghệ Phần Mềm"
            />
        </section>
    </div>
</template>

<script>
    import DetailComponent from "../components/DetailComponent";
    export default {
        name: "ContentCv",
        components: {
            DetailComponent
        }
    }
</script>

<style scoped>

</style>
