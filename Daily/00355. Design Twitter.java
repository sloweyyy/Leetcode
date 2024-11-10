import java.util.List;
import java.util.*;

class Twitter {
    private Map<Integer, Set<Integer>> followers;
    private Map<Integer, List<Tweet>> tweets;
    private int timestamp;

    private static class Tweet {
        int tweetId;
        int timestamp;

        public Tweet(int tweetId, int timestamp) {
            this.tweetId = tweetId;
            this.timestamp = timestamp;
        }
    }

    public Twitter() {
        followers = new HashMap<>();
        tweets = new HashMap<>();
        timestamp = 0;
    }

    public void postTweet(int userId, int tweetId) {
        if (!tweets.containsKey(userId)) {
            tweets.put(userId, new ArrayList<>());
        }
        tweets.get(userId).add(new Tweet(tweetId, timestamp++));
    }

    public List<Integer> getNewsFeed(int userId) {
        List<Integer> newsFeed = new ArrayList<>();
        PriorityQueue<Tweet> pq = new PriorityQueue<>((t1, t2) -> t2.timestamp - t1.timestamp);

        if (tweets.containsKey(userId)) {
            for (Tweet tweet : tweets.get(userId)) {
                pq.offer(tweet);
            }
        }

        if (followers.containsKey(userId)) {
            for (int followeeId : followers.get(userId)) {
                if (tweets.containsKey(followeeId)) {
                    for (Tweet tweet : tweets.get(followeeId)) {
                        pq.offer(tweet);
                    }
                }
            }
        }
        while (!pq.isEmpty() && newsFeed.size() < 10) {
            newsFeed.add(pq.poll().tweetId);
        }

        return newsFeed;
    }

    public void follow(int followerId, int followeeId) {
        if (!followers.containsKey(followerId)) {
            followers.put(followerId, new HashSet<>());
        }
        followers.get(followerId).add(followeeId);
    }

    public void unfollow(int followerId, int followeeId) {
        if (followers.containsKey(followerId)) {
            followers.get(followerId).remove(followeeId);
        }
    }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * Twitter obj = new Twitter();
 * obj.postTweet(userId,tweetId);
 * List<Integer> param_2 = obj.getNewsFeed(userId);
 * obj.follow(followerId,followeeId);
 * obj.unfollow(followerId,followeeId);
 */