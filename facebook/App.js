import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView } from "react-native"
import { Ionicons } from '@expo/vector-icons'
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


const FacebookHome = () => {
  const [showReactions, setShowReactions] = useState({});
  const [postReactions, setPostReactions] = useState({});
  const reactions = [
    { type: 'like', icon: 'thumbs-up', color: '#1877f2', bgColor: '#e7f3ff' },
    { type: 'love', icon: 'heart', color: '#f33e58', bgColor: '#ffeaa7' },
    { type: 'haha', icon: 'happy-outline', color: '#ffffff', bgColor: '#f7b731' },
    { type: 'wow', icon: 'surprise-outline', color: '#ffffff', bgColor: '#f7b731' },
    { type: 'sad', icon: 'sad-outline', color: '#ffffff', bgColor: '#f7b731' },
    { type: 'angry', icon: 'angry-outline', color: '#ffffff', bgColor: '#e55039' },
  ];

  const handleReaction = (postId, reactionType) => {
    setPostReactions(prev => ({
      ...prev,
      [postId]: reactionType
    }));
    setShowReactions(prev => ({
      ...prev,
      [postId]: false
    }));
  };

  const toggleReactions = (postId) => {
    setShowReactions(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const getPrivacyIcon = (privacy) => {
    switch (privacy) {
      case 'public':
        return 'globe-outline';
      case 'friends':
        return 'people-outline';
      case 'private':
        return 'lock-closed-outline';
      default:
        return 'globe-outline';
    }
  };
  const posts = [
    {
      id: 1,
      userName: "Mohtasim Dipto",
      userAvatar: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/523898812_1465332561126386_4284033474859837182_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEFNCcIBKMsR_pqKrk7xXHT2SFutC-1PuXZIW60L7U-5WoLJZkJGKuA0Yj8poY0vj5mXVOi5R3vuilgIsSNmEG7&_nc_ohc=pwgCbFx1N-8Q7kNvwEb0O5m&_nc_oc=AdlNGdkLsQCkH-4K9Kh-SEVZAHesN88U_Q3C2NJjVjX7YHnewuzogJ9MYqAK4mTVWh4&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=oSPz-sZik-8Bd02BLzG7Vg&oh=00_AfQXZSIgzwwhkYyTmli__U0qwRk24W9b5FFK_qA6vLB-kw&oe=689592DB",
      timeAgo: "2h",
      privacy: "public",
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
      privacy: "friends",
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
      privacy: "public",
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
      privacy: "friends",
      content:
        "Doing AI lab 🏃‍♀️",
      postImage: "https://thumb.photo-ac.com/ca/cada20c523133e95f90a7c0fc73471f6_t.jpeg",
      likes: 156,
      comments: 31,
      shares: 9,
    },
  ]

  const stories = [
    { 
      id: 1, 
      name: "Create story", 
      isAddStory: true,
      backgroundImage: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/523898812_1465332561126386_4284033474859837182_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEFNCcIBKMsR_pqKrk7xXHT2SFutC-1PuXZIW60L7U-5WoLJZkJGKuA0Yj8poY0vj5mXVOi5R3vuilgIsSNmEG7&_nc_ohc=pwgCbFx1N-8Q7kNvwEb0O5m&_nc_oc=AdlNGdkLsQCkH-4K9Kh-SEVZAHesN88U_Q3C2NJjVjX7YHnewuzogJ9MYqAK4mTVWh4&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=oSPz-sZik-8Bd02BLzG7Vg&oh=00_AfQXZSIgzwwhkYyTmli__U0qwRk24W9b5FFK_qA6vLB-kw&oe=689592DB"
    },
    { 
      id: 2, 
      name: "Hasin Mahtab Alvee", 
      backgroundImage: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/481056310_1565134457537057_900710999221911285_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH4YPLEt6dtuDXsULqsF-nQORkbJiZsHrg5GRsmJmweuKerLkWA6k2boxVb0MiPlEql17a6Lcmy9WL8yrXdp42E&_nc_ohc=dU2cwZPdcZoQ7kNvwHuTar8&_nc_oc=AdlFM0nxPqTkMUt_RIi9HC62CZfWTcwVeIEPQVCmMsGP5SSS2wD1zpCAZQCuhYy6n6w&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=TIN7FNECCPweaDQvE3hLCQ&oh=00_AfWXLX7nVlOVC39G0oo8SmjYVJa9f_ty80biv1zqOpFTow&oe=68B73C2B",
      avatar: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/480664751_1567613450622491_3507100149634256384_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEy7aVlfOzoVpTPeMqBPUguwb07hKF4TDfBvTuEoXhMN1JWQWu5Ojb0Ebsnmu8fT-7ovvp8Yj1UNXNWULfWGF-m&_nc_ohc=MhVWW_tlKRIQ7kNvwFRgu66&_nc_oc=AdlbxuXQaC51sJhhgfsru3Sp6wNb62c9LkpCSEErb7w_SLBs-lbPsXOn-WwG_XD3cG0&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=PTHgCrSslYruIJfvX2I-5w&oh=00_AfULW2DF1ICqnC48wE-JQcsPz9ArTCTHrhXAM_XFxZZTXw&oe=68B73C16"
    },
    { 
      id: 3, 
      name: "Hasibul Islam Nirjhar", 
      backgroundImage: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/495569233_3959853460904559_1716252145524652833_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeFrBWIR_YQDULqeTWYwO_M4-PP9jOPq-yr48_2M4-r7KrwOup6XD53qqW2aakr1__bh53HB2tDGg_t43PnmzhjF&_nc_ohc=7sy7etxQnnQQ7kNvwGixh2C&_nc_oc=AdmvVf-teCOL1qCh7TTBTKKdIT647guW5IEvn4obquUJzO5dSjgnhO0dXs2-giSw8Cw&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=BJ_UVq9X37V1Fca3Z9xHag&oh=00_AfUQTGGNUDZV5R3F4sYBUVIN7PIlDkRywrmUlm66yQrf0A&oe=68B75FDE",
      avatar: "https://scontent.fdac14-1.fna.fbcdn.net/v/t1.6435-9/83274601_2516795681877018_1482284696653004800_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGlBH4_nhTrXuNLX1qcK6KpgWWBkbRcE5qBZYGRtFwTmvbVp-83BH5GzsS3gfq_LU7gBsaPLxNJHcIDXUQiL5oD&_nc_ohc=oJwVQvg1kiUQ7kNvwEr62TB&_nc_oc=AdnfsVoeX_fjJXavCDfxBCJUYqNQ3rS22Nc2VzxmjXgCEJu85NRPP8UZzQbbHm973Ok&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=Bsuuw6-mN5NYyx9_Moy70w&oh=00_AfWrsMTKiCcakath7-BlTdjAEVGJ_JdZZlXr9iR-bjcw0A&oe=68D8D781"
    },
    { 
      id: 4, 
      name: "Adid Mahamud", 
      backgroundImage: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/474784548_3920927441522067_364593194277507997_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFMtpp9NaZASfkmhHpPNA0pzgk4fpnlLXHOCTh-meUtcQvQC0N0lIQj1Y0mwZ1zy6Ma33DfupoxDPWlb2qndllX&_nc_ohc=yo7LZWZAd9IQ7kNvwEuaHsd&_nc_oc=AdmkzQFH3GUPwbvXEIV6s2gpDwim95DgMJ3BAptoS6fFA9N6LATqRQzUaxjaawtg90U&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=F9Sz-ZNQ7tjhNMIlr77qrw&oh=00_AfWSeRpVSbWmDRlELb3bEyMCHqO3lkAnDDRN2oVH6qE7Zw&oe=68B76B16",
      avatar: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/518990890_4091021404512669_6221898191994083714_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEV8V6OgKqQ-8LX1Oh5dBu3snnp8q6ORYeyeenyro5Fhxcv6m2NtjvPrXFUAMIxOuCGNwvGuP4FtJD51KglIoSF&_nc_ohc=5l_caDYUidYQ7kNvwEn7REW&_nc_oc=AdmAgedYdJXMs5PjPAvHx1tB_wPwwqk9vpWKCEbH16W93VKC1BeQAiRFqiW0BhLVvVs&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=ZhdShYmDH3HZQrsblwCa6g&oh=00_AfRUws1P5m9FF9wc9T4MDSWn9tnugOYeBwQJL6ssPYOWkQ&oe=68956965"
    },
    { 
      id: 5, 
      name: "Mahmudul Islam Mahin", 
      backgroundImage: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/530626060_784965078022748_4889863593763526751_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=bd9a62&_nc_eui2=AeHWLyRvfTQQBlR0Dwwbd41YTS2Jl2MEX65NLYmXYwRfrnQcbso4hA1idfNkvuo00SAhTiQOPs1lJdw3sMUT8TzU&_nc_ohc=IpxY8puxH4wQ7kNvwGqlP3i&_nc_oc=Adn1C2QsaUYf1uGPzTVytRdX13hw1uK9z-1xZi7GYQOsydVGAJC1GR7ibHmMSKpYnw8&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=jXyQ6qkCri9nRmflvd593Q&oh=00_AfUo6lO0_Ar5LX8t8TpYrL-vRLX-EJMgN2vc8CV_PxPbWA&oe=68B76C4D",
      avatar: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/531905176_2385417141852533_5374018860973187752_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGT9abpHnVtxL6Q9_ppngu18DCdXKURHWTwMJ1cpREdZOufT4IT63EgxgItyb9UEAticHomsuk7nLhao3puhDyH&_nc_ohc=IsWUgUZSxS4Q7kNvwHIADNM&_nc_oc=AdkquVX3j68LKDbQs3pHniuzMUHHBaWBrFwoWFW7d6tq85H6JqYOECHAzBvPp9X2U0A&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=f2DXI3aoxdkUy7WAGCMT-g&oh=00_AfUh9qaPdQDVV3vfSmTXkbfJ8_ilYP9XSLCMvEc5VayqcA&oe=68B7620C"
    },
  ]

  const PostItem = ({ item: post }) => {
    const currentReaction = postReactions[post.id];
    const reactionData = reactions.find(r => r.type === currentReaction);
    
    return (
    <View style={styles.postContainer}>
      {/* Post Header */}
      <View style={styles.postHeader}>
        <Image source={{ uri: post.userAvatar }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{post.userName}</Text>
          <View style={styles.timePrivacyContainer}>
            <Text style={styles.timeAgo}>{post.timeAgo}</Text>
            <Text style={styles.privacyDot}> • </Text>
            <Ionicons name={getPrivacyIcon(post.privacy)} size={12} color="#65676b" />
          </View>
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
          <View style={styles.reactionIcons}>
            <View style={[styles.reactionIconCircle, { backgroundColor: '#1877f2' }]}>
              <Ionicons name="thumbs-up" size={12} color="white" />
            </View>
            <View style={[styles.reactionIconCircle, { backgroundColor: '#f33e58' }]}>
              <Ionicons name="heart" size={12} color="white" />
            </View>
            <View style={[styles.reactionIconCircle, { backgroundColor: '#f7b731' }]}>
              <FontAwesome5 name="laugh-squint" size={12} color="black" />
            </View>
          </View>
          <Text style={styles.statsTextLike}>{post.likes}</Text>
        </View>
        <View style={styles.rightStats}>
          <Text style={styles.statsText}>{post.comments} comments</Text>
          <Text style={styles.statsText}>{post.shares} shares</Text>
        </View>
      </View>

      {/* Reactions Overlay */}
      {showReactions[post.id] && (
        <View style={styles.reactionsOverlay}>
          <View style={styles.reactionsContainer}>
            {reactions.map((reaction) => (
              <TouchableOpacity
                key={reaction.type}
                style={[styles.reactionButton, { backgroundColor: reaction.bgColor }]}
                onPress={() => handleReaction(post.id, reaction.type)}
              >
                <View style={[styles.reactionButtonCircle, { backgroundColor: reaction.color }]}>
                  <Ionicons name={reaction.icon} size={16} color="white" />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => toggleReactions(post.id)}
        >
          {reactionData ? (
            <>
              <View style={[styles.actionReactionCircle, { backgroundColor: reactionData.color }]}>
                <Ionicons name={reactionData.icon} size={16} color="white" />
              </View>
              <Text style={[styles.actionText, { color: reactionData.color }]}> {reactionData.type.charAt(0).toUpperCase() + reactionData.type.slice(1)}</Text>
            </>
          ) : (
            <>
              <AntDesign style={{ fontWeight: 'normal' }} name="like2" size={24} color="black" />
              <Text style={styles.actionText}> Like</Text>
            </>
          )}
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
  )}

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
        <View style={styles.createStoryCard}>
          <Image source={{ uri: item.backgroundImage }} style={styles.createStoryBackground} />
          <View style={styles.createStoryOverlay}>
            <View style={styles.createStoryIconContainer}>
              <Ionicons name="add" size={20} color="white" />
            </View>
            <Text style={styles.createStoryText}>{item.name}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.storyCard}>
          <Image source={{ uri: item.backgroundImage }} style={styles.storyBackground} />
          <View style={styles.storyOverlay}>
            <Image source={{ uri: item.avatar }} style={styles.storyProfileImage} />
            <Text style={styles.storyUserName}>{item.name}</Text>
          </View>
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
    paddingHorizontal: 12,
    borderBottomWidth: 8,
    borderBottomColor: "#f0f2f5",
    marginBottom: 0,
  },
  storyItem: {
    marginRight: 8,
    width: 110,
    height: 190,
  },
  createStoryCard: {
    width: 110,
    height: 190,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  createStoryBackground: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
  },
  createStoryOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  createStoryIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1877f2',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -20,
    borderWidth: 3,
    borderColor: 'white',
  },
  createStoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1c1e21',
    textAlign: 'center',
    marginTop: 16,
  },
  storyCard: {
    width: 110,
    height: 190,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  storyBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  storyOverlay: {
    position: 'absolute',
    top: 12,
    left: 12,
    right: 12,
    bottom: 12,
    justifyContent: 'space-between',
  },
  storyProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#1877f2',
  },
  storyUserName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
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
  timePrivacyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeAgo: {
    fontSize: 12,
    color: "#65676b",
  },
  privacyDot: {
    fontSize: 12,
    color: "#65676b",
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
  reactionIcons: {
    flexDirection: 'row',
    marginRight: 8,
  },
  reactionIconCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -4,
    borderWidth: 2,
    borderColor: 'white',
  },
  reactionsOverlay: {
    position: 'absolute',
    bottom: 60,
    left: 12,
    right: 12,
    zIndex: 1000,
  },
  reactionsContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 12,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  reactionButton: {
    padding: 6,
    borderRadius: 25,
    marginHorizontal: 2,
  },
  reactionButtonCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionReactionCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  rightStats: {
    flexDirection: "row",
  },
  statsText: {
    fontSize: 12,
    color: "#65676b",
    marginLeft: 12,
  },
  statsTextLike: {
   fontSize: 12,
    color: "#65676b",
    marginLeft: -6,
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