<template>
    <el-row>
        <el-col :span="5">
            <el-menu router :default-active="defaultActive">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>导航一</template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="/home/table">table</el-menu-item>
                        <el-menu-item index="/home/form">form</el-menu-item>
                        <el-menu-item index="/home/charts">charts</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
                <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="19">
            <transition name="fade" mode="out-in">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </el-col>
    </el-row>
</template>
<script>
    export default {
        data(){
            return {
                defaultActive:''
            }
        },
        methods:{

        },
        mounted(){
            this.defaultActive = this.$route.path;
        }
    }
</script>
<style scoped>

</style>