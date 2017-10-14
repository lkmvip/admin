<template>
    <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="50">
    </el-pagination>
</template>
<script>
    export default {
        props:['page'],
        name:'xf-pagination',
        data(){
          return {
              currentPage:1,
              pageSize:10,
              timeOut:''
          }
        },
        methods:{
            handleSizeChange(val) {
                this.pageSize = val;
                this.change();
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.change();
            },
            change(){
                this.timeOut || (this.timeOut = setTimeout(() => {
                    clearTimeout(this.timeOut);
                    this.timeOut = '';
                    this.$emit('p-change',{
                        currentPage:this.currentPage,
                        pageSize:this.pageSize
                    });
                },100))
            }
        },
        mounted(){

        }
    }
</script>