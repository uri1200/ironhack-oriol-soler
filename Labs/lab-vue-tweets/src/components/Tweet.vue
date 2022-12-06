   <template>
    <div class="tweet" >
        <ProfileImage :image="tweet.user.image"/>

        <div class="body">
            <div class="top">
                <User :userData="tweet.user"/>
                <Timestamp :time="tweet.timestamp" />
            </div>

            <Message :message="tweet.message" />    

            <Actions/>
        </div>

        <i class="fas fa-ellipsis-h"></i>
    </div>
</template>
  
<style scoped>
a {
    color: #42b983;
}
</style>

<script setup>
import {defineProps} from 'vue';
import Actions from './Actions.vue';
import ProfileImage from './ProfileImage.vue';
import User from './User.vue';
import Timestamp from './Timestamp.vue';
import Message from './Message.vue';

const props = defineProps({
    tweet:{
        user: {
            image: String,
            name: String,
            handle: String
        },
        timestamp: String,
        message: String
    }
})
console.log(props)
</script>
