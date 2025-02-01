/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution
{
public:
    vector<int> findMode(TreeNode *root)
    {
        vector<int> ans;
        int maxFreq = 0, currFreq = 0, prev = INT_MIN;
        inorder(root, prev, currFreq, maxFreq, ans);
        return ans;
    }

    void inorder(TreeNode *root, int &prev, int &currFreq, int &maxFreq, vector<int> &ans)
    {
        if (!root)
            return;
        inorder(root->left, prev, currFreq, maxFreq, ans);
        if (prev == root->val)
            currFreq++;
        else
            currFreq = 1;
        if (currFreq > maxFreq)
        {
            maxFreq = currFreq;
            ans.clear();
            ans.push_back(root->val);
        }
        else if (currFreq == maxFreq)
            ans.push_back(root->val);
        prev = root->val;
        inorder(root->right, prev, currFreq, maxFreq, ans);
    }
};