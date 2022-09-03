<template>
    <div class="card edit-field">
        <div class="card-body">
                <label for="edit-post" class="form-label">编辑帖子</label>
                <textarea v-model="content" class="form-control" id="edit-post" rows="3"></textarea>
                <button @click="post_a_post" type="button" class="btn btn-primary btn-sm">发帖子</button>
        </div>
    </div>
</template>


<script>
    import $ from 'jquery'
    import { ref } from 'vue'
import { useStore } from 'vuex';
    export default{
        name: "UserProfileWrite",

        setup(props, context) {
            const store = useStore();
            let content = ref('');

            const post_a_post=() => {

                $.ajax({
                    url:"https://app165.acapp.acwing.com.cn/myspace/post/",
                    type:"POST",
                    data:{
                        content:context.value,
                    },
                    headers:{
                        'Authorization' : "Bearer " + store.state.user.access,
                    },

                    success(resp){
                        if(resp.result === "success"){
                            context.emit('post_a_post',content.value);
                            content.value = "";
                        }
                    },
                })
            }

            return {
                content,
                post_a_post
            }
        }
    }

</script>


<style scoped>
.edit-field{
    margin-top: 10px;
}

button{
    margin-top: 10px;
}
</style>