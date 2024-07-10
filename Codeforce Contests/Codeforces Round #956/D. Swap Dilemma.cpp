#include <bits/stdc++.h>

#define int long long
using namespace std;

int inversions(int arr[],int l,int r){
    if(r==l)return 0;
    
    //divide and conquer:
    int mid=(l+r)/2;
    int x=inversions(arr,l,mid);
    int y=inversions(arr,mid+1,r);

    //simple merging:
    int ans[r-l+1];

    int curr=0,inv=0;
    int pointx=l,pointy=mid+1;
    while(pointx<=mid && pointy<=r){
        if(arr[pointx]<arr[pointy]){
            inv+=pointy-mid-1;
            ans[curr]=arr[pointx];
            
            pointx++;
        }
        else{
            ans[curr]=arr[pointy];
            
            pointy++;
        }

        curr++;
    }

    while(pointx<=mid){
        inv+=pointy-mid-1;
        ans[curr]=arr[pointx];
            
        pointx++;
        curr++;
    }

    while(pointy<=r){
        ans[curr]=arr[pointy];

        pointy++;
        curr++;
    }

    //final writeback:
    for(int i=l;i<=r;i++){
        arr[i]=ans[i-l];
    }

    return x+y+inv;
}

int32_t main(){
    int t;
    cin >> t;
    while(t--){
        int n;
        cin >> n;
        int a[n],b[n],x[n],y[n];
        for(int i=0;i<n;i++){
            cin >> a[i];
            x[i]=a[i];
        }
        for(int i=0;i<n;i++){
            cin >> b[i];
            y[i]=b[i];
        }
        
        sort(x,x+n);
        sort(y,y+n);
        
        int flag=0;
        for(int i=0;i<n;i++){
            if(x[i]!=y[i])flag=1;
        }

        cout << (((inversions(a,0,n-1)%2)==(inversions(b,0,n-1)%2)) && flag==0 ? "YES" : "NO") << "\n";
    }

    return 0;
}