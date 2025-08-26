import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView } from "react-native"
import { Ionicons } from '@expo/vector-icons'
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';


const FacebookHome = () => {
  const posts = [
    {
      id: 1,
      userName: "Mohtasim Dipto",
      userAvatar: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/523898812_1465332561126386_4284033474859837182_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEFNCcIBKMsR_pqKrk7xXHT2SFutC-1PuXZIW60L7U-5WoLJZkJGKuA0Yj8poY0vj5mXVOi5R3vuilgIsSNmEG7&_nc_ohc=pwgCbFx1N-8Q7kNvwEb0O5m&_nc_oc=AdlNGdkLsQCkH-4K9Kh-SEVZAHesN88U_Q3C2NJjVjX7YHnewuzogJ9MYqAK4mTVWh4&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=oSPz-sZik-8Bd02BLzG7Vg&oh=00_AfQXZSIgzwwhkYyTmli__U0qwRk24W9b5FFK_qA6vLB-kw&oe=689592DB",
      timeAgo: "2h",
      content:
        "✨🌌",
      postImage: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/473080794_1325597001766610_2303201084741827253_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFUCWzj2eDnHf6V8ARnFQW3-FAzczQ2aqj4UDNzNDZqqNzV93DgDtgKVEm4DuPkp_Lp1sGW31iDGGN9Yz93XdB7&_nc_ohc=Guh_3AaKPogQ7kNvwFIOa34&_nc_oc=AdnKflm5J6XDN_89XzsQIY-s_kk9R2fNVMdIkR3io8-of17k7zDUUA3NnUrE5AS3b3k&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=DEmoG_vBqD4t0C96yqE0Xg&oh=00_AfRPLpUbv-Suhe9vT_PnS3y_LgZYCmFkqcNx6XM_5gECMw&oe=6895782C",
      likes: 42,
      comments: 8,
      shares: 3,
    },
    {
      id: 2,
      userName: "Hasin Mahtab Alvee",
      userAvatar: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/480664751_1567613450622491_3507100149634256384_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEy7aVlfOzoVpTPeMqBPUguwb07hKF4TDfBvTuEoXhMN1JWQWu5Ojb0Ebsnmu8fT-7ovvp8Yj1UNXNWULfWGF-m&_nc_ohc=3Bx26h1BDlMQ7kNvwEKz1eH&_nc_oc=Adng_YNPdHia7BCjgY4StigoTEwB9fwXhTffpt0d_KVG4XF3KnqP6C42ToAhu6Lf7Bw&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=LmW8Tz5D1WnfpIsZIeBZiw&oh=00_AfSIL34GpvQ3HKUuzxYwpO0cwNr6BNP2njT273Ok_Gc1SA&oe=68956596",
      timeAgo: "4h",
      content:
        "Excited to share my latest art project! This painting took me weeks to complete, but I'm so proud of how it turned out. Art has always been my passion and escape. 🎨",
      postImage: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/326270887_748382470183325_1287653175448743313_n.png?stp=dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeFOp_zWvOQwJonmFJapSr18vExYjtfQxG28TFiO19DEbXi-fzp4F5bsbQlLGPc4kN0Ei3qrxcfI8nCgzTMrNSnu&_nc_ohc=qIgJ5G2bvCsQ7kNvwH2YG5d&_nc_oc=AdnpHcqKOsuCzrxvXrtv9CjOF1mkNHmYEkuoPkOKskKFSlJavyo8wtczOfzg3Uxc3CE&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=eePyVi-e3_-9ac-hO9cZHw&oh=00_AfQTmGhRXh6RqU2cy1f4Up72n38rN099VSnxO8nO2AV4zg&oe=68958367",
      likes: 127,
      comments: 23,
      shares: 12,
    },
    {
      id: 3,
      userName: "Adid Al Mahamud Shazid",
      userAvatar: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/518990890_4091021404512669_6221898191994083714_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEV8V6OgKqQ-8LX1Oh5dBu3snnp8q6ORYeyeenyro5Fhxcv6m2NtjvPrXFUAMIxOuCGNwvGuP4FtJD51KglIoSF&_nc_ohc=5l_caDYUidYQ7kNvwEn7REW&_nc_oc=AdmAgedYdJXMs5PjPAvHx1tB_wPwwqk9vpWKCEbH16W93VKC1BeQAiRFqiW0BhLVvVs&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=ZhdShYmDH3HZQrsblwCa6g&oh=00_AfRUws1P5m9FF9wc9T4MDSWn9tnugOYeBwQJL6ssPYOWkQ&oe=68956965",
      timeAgo: "6h",
      content:
        "Family dinner tonight was incredible! My mom made her famous lasagna and we all gathered around the table sharing stories and laughs. These moments are what life is all about. ❤️",
      postImage: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/502627220_4046644002283743_7351594795823508365_n.jpg?stp=cp6_dst-jpg_s960x960_tt6&_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEAlF_FJg-r_yhrbeTHRj1ssRsVfoIldxmxGxV-giV3GfYEpfhfvBCbyt_BKdatHSdkk_AeC_EUgirtpbIBm68C&_nc_ohc=mUzGtFlI3t0Q7kNvwH5Gw5J&_nc_oc=AdmBmEP2p1hustUUNX1Qg908gB4BCHZB8tiRD6bjTjI_eBLCFK_VPjl0bkrpmr2DUjU&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=1eXw9otYb-2_ElcmBbuKww&oh=00_AfSEgeOZPMMUFdtTsjekTrlPBHubwqT20nhFw6aRUCBIQA&oe=6895858F",
      likes: 89,
      comments: 15,
      shares: 7,
    },
    {
      id: 4,
      userName: "Nahiyan Kabir",
      userAvatar: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-1/480669691_2198267007271786_6763055281039840056_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHGHPvKuwIxYvFhTPprj8aEIgPu5ZVuaFkiA-7llW5oWTcuMCYVTr3jgs-Dqanx0NOhjRWzx7-1Vv-0NL_nRVDp&_nc_ohc=lKXP3mHozNcQ7kNvwEt8PCK&_nc_oc=AdkCS_d1Ib7O5j7dVkNREcqBTpLECsZtI7QZWl7phS57OfGWT0KpfFPPVVQfDPW3mgo&_nc_zt=24&_nc_ht=scontent.fdac14-1.fna&_nc_gid=L1tQmWZ2MuTOvR_vhFCJBA&oh=00_AfR59rcxjnAYP5IpuEDES49ADDI35btkHxZY4o1Z7Dwdug&oe=68957415",
      timeAgo: "8h",
      content:
        "Doing AI lab 🏃‍♀️",
      postImage: "https://thumb.photo-ac.com/ca/cada20c523133e95f90a7c0fc73471f6_t.jpeg",
      likes: 156,
      comments: 31,
      shares: 9,
    },
  ]

  const stories = [
    { id: 1, name: "Your Story", isAddStory: true },
    { id: 2, name: "Story 1", avatar: "https://images.unsplash.com/photo-1500000001?w=80&h=80&fit=crop&crop=face" },
    { id: 3, name: "Story 2", avatar: "https://images.unsplash.com/photo-1500000002?w=80&h=80&fit=crop&crop=face" },
    { id: 4, name: "Story 3", avatar: "https://images.unsplash.com/photo-1500000003?w=80&h=80&fit=crop&crop=face" },
    { id: 5, name: "Story 4", avatar: "https://images.unsplash.com/photo-1500000004?w=80&h=80&fit=crop&crop=face" },
    { id: 6, name: "Story 5", avatar: "https://images.unsplash.com/photo-1500000005?w=80&h=80&fit=crop&crop=face" },
  ]

  const PostItem = ({ item: post }) => (
    <View style={styles.postContainer}>
      {/* Post Header */}
      <View style={styles.postHeader}>
        <Image source={{ uri: post.userAvatar }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{post.userName}</Text>
          <Text style={styles.timeAgo}>{post.timeAgo}</Text>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <Ionicons name="ellipsis-horizontal" size={20} color="#65676b" />
        </TouchableOpacity>
      </View>

      {/* Post Content */}
      <Text style={styles.postContent}>{post.content}</Text>

      {/* Post Image */}
      {post.postImage && <Image source={{ uri: post.postImage }} style={styles.postImage} />}

      {/* Post Stats */}
      <View style={styles.postStats}>
        <View style={styles.leftStats}>
          <AntDesign style={{ marginRight: -10 }} name="like1" size={18} color="#4986FB" />
          <Text style={styles.statsText}> {post.likes}</Text>
        </View>
        <View style={styles.rightStats}>
          <Text style={styles.statsText}>{post.comments} comments</Text>
          <Text style={styles.statsText}>{post.shares} shares</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton}>
           <AntDesign style={{ fontWeight: 'normal' }} name="like2" size={24} color="black" />
          <Text style={styles.actionText}> Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-outline" size={20} color="#65676b" />
          <Text style={styles.actionText}> Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="arrow-redo-outline" size={20} color="#65676b" />
          <Text style={styles.actionText}> Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  const CreatePostSection = () => (
    <View style={styles.createPostSection}>
      <Image
        source={{ uri: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-1/523898812_1465332561126386_4284033474859837182_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeEFNCcIBKMsR_pqKrk7xXHT2SFutC-1PuXZIW60L7U-5WoLJZkJGKuA0Yj8poY0vj5mXVOi5R3vuilgIsSNmEG7&_nc_ohc=pwgCbFx1N-8Q7kNvwEb0O5m&_nc_oc=AdlNGdkLsQCkH-4K9Kh-SEVZAHesN88U_Q3C2NJjVjX7YHnewuzogJ9MYqAK4mTVWh4&_nc_zt=24&_nc_ht=scontent.fdac14-1.fna&_nc_gid=DEmoG_vBqD4t0C96yqE0Xg&oh=00_AfQqu8shoo4BA6UqePrwd9t7do0_Ek1-SJtpyImXZI8ORg&oe=68958B59" }}
        style={styles.createPostAvatar}
      />
      <TouchableOpacity style={styles.createPostInput}>
        <Text style={styles.createPostText}>What's on your mind?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.photoButton}>
        <Ionicons name="images-outline" size={24} color="#42b883" />
      </TouchableOpacity>
    </View>
  )

  const StoryItem = ({ item }) => (
    <TouchableOpacity style={styles.storyItem}>
      {item.isAddStory ? (
        <View style={styles.addStoryButton}>
          <View style={styles.addStoryIcon}>
            <Ionicons name="add" size={24} color="#1877f2" />
          </View>
          <Text style={styles.storyText}>{item.name}</Text>
        </View>
      ) : (
        <View style={styles.storyItem}>
          <Image source={{ uri: item.avatar }} style={styles.storyAvatar} />
          <Text style={styles.storyText}>{item.name}</Text>
        </View>
      )}
    </TouchableOpacity>
  )

  const renderFeedItem = ({ item, index }) => {
    if (index === 0) {
      return (
        <View>
          <CreatePostSection />
          <View style={styles.storiesContainer}>
            <FlatList
              data={stories}
              renderItem={StoryItem}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <PostItem item={item} />
        </View>
      )
    }
    return <PostItem item={item} />
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header - Fixed */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>facebook</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="search" size={20} color="#1c1e21" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="chatbubbles" size={20} color="#1c1e21" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Navigation Tabs - Fixed */}
      <View style={styles.navigationTabs}>
        <TouchableOpacity style={[styles.navTab, styles.activeTab]}>
          <Ionicons name="home" size={24} color="#1877f2" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navTab}>
          <Ionicons name="play" size={24} color="#65676b" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navTab}>
          <Ionicons name="people" size={24} color="#65676b" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navTab}>
          <Ionicons name="storefront" size={24} color="#65676b" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navTab}>
          <Ionicons name="notifications" size={24} color="#65676b" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navTab}>
          <Ionicons name="menu" size={24} color="#65676b" />
        </TouchableOpacity>
      </View>

      {/* Main Feed using FlatList */}
      <FlatList
        data={posts}
        renderItem={renderFeedItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        style={styles.feed}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 50,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e4e6ea",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1877f2",
  },
  headerIcons: {
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: 16,
    padding: 8,
    backgroundColor: "#f0f2f5",
    borderRadius: 20,
  },
  navigationTabs: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e4e6ea",
  },
  navTab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#1877f2",
  },
  createPostSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e4e6ea",
  },
  createPostAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  createPostInput: {
    flex: 1,
    marginLeft: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#f0f2f5",
    borderRadius: 20,
  },
  createPostText: {
    color: "#65676b",
    fontSize: 16,
  },
  photoButton: {
    marginLeft: 12,
    padding: 8,
  },
  storiesContainer: {
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 0,
    borderBottomWidth: 8,
    borderBottomColor: "#f0f2f5",
    marginBottom: 0,
    maxHeight: 120,
  },
  addStoryButton: {
    alignItems: "center",
    marginLeft: 16,
    marginRight: 8,
  },
  addStoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f0f2f5",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#1877f2",
  },
  storyItem: {
    alignItems: "center",
    marginRight: 12,
  },
  storyAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#1877f2",
  },
  storyText: {
    fontSize: 12,
    marginTop: 4,
    textAlign: "center",
    maxWidth: 60,
  },
  feed: {
    flex: 1,
  },
  postContainer: {
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    marginBottom: 8,
    paddingBottom: 8,
    borderBottomWidth: 8,
    borderBottomColor: "#f0f2f5",
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userInfo: {
    flex: 1,
    marginLeft: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1c1e21",
  },
  timeAgo: {
    fontSize: 12,
    color: "#65676b",
    marginTop: 2,
  },
  moreButton: {
    padding: 8,
  },
  postContent: {
    fontSize: 14,
    lineHeight: 20,
    color: "#1c1e21",
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  postImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  postStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e4e6ea",
  },
  leftStats: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightStats: {
    flexDirection: "row",
  },
  statsText: {
    fontSize: 12,
    color: "#65676b",
    marginLeft: 12,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 8,
  },
  actionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  actionText: {
    fontSize: 14,
    color: "#65676b",
    fontWeight: "500",
  },
})

export default FacebookHome