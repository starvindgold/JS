class minheap:
  def __init__(self):
    self.size=0
    self.queue=[]

  def adde(self , des,ncost):
    ne=node(des,ncost)
    self.queue.append(ne)
    
    self.size = self.size  +  1
    b_m(self.queue,self.size)
  
  def remfirst(self):
    self.queue.pop(0)
    self.size=self.size-1
#minheap class end

class node:
  def __init__(self , newv,newco):
    self.name=newv
    self.cost=newco
    self.next=0
  #declearation of node
#node class end

class vertices:
  def __init__(self , nov):
    self.v=nov
    self.edlist=[node(0,10000)]
    for i in range(nov):
      self.edlist.append(node(i,10000))
  #declearation of vertices
  
  def addedge(self,sor,des,ncost):
    nedge=node(des,ncost)
    nedge.next=self.edlist[sor].next
    self.edlist[sor].next=nedge
  #addedge function end

  def dijkstra(self,sor):
    parents = []  #parents info
    
    for v in range(self.v):
      parents.append(-1)  #initial parent set to -1
    self.edlist[sor].cost=0 #source cost
    Q = minheap()
    Q.adde(sor,self.edlist[sor].cost)
    while Q.size > 0:
      n=Q.queue[0].name
      c=Q.queue[0].cost
      t=self.edlist[n].next
      while t is not 0:
        if self.edlist[t.name].cost > c + t.cost:
          parents[t.name]=n
          self.edlist[t.name].cost=c + t.cost
          Q.adde(t.name,self.edlist[t.name].cost)
        t=t.next
      Q.remfirst()
    print("Vertex  Distance from source   Parent")
    for i in range(self.v):
      print(i,parents[i],self.edlist[i].cost)
  #dijkstra function end

  def printout(self ):
    for i in self.edlist:
      print(i.name,"\t",i.cost)
      i=i.next
#vertices class end

#Min heapify function
def min_h(ar , i , N):
    l=2*i+1         #left child pos
    r=2*i+2         #right child pos
    s=i             #smallest child pos
    if (l < N) and (ar[l].cost < ar[i].cost) :
      s=l
    if (r < N) and (ar[r].cost < ar[s].cost) :
      s=r
    if s == i :
      return
    else:           #as parent is not the smallest, we need to swap and check if the new child is at correct pos
      temp = ar[i]
      ar[i] = ar[s]
      ar[s] = temp
      min_h(ar,s,N)
# end of heapify

#Build min heap function
def b_m( ar, N):
  for i in range(int(N/2)+1,-1,-1):
    min_h(ar,i,N)
# end of build_min
    
graph=vertices(8)   #declearation of vertices

#addition of edges
graph.addedge(0,1,10)
graph.addedge(0,2,4)
graph.addedge(1,3,10)
graph.addedge(3,2,10)
graph.addedge(2,4,2)
graph.addedge(1,5,3)
graph.addedge(5,6,3)
graph.addedge(6,7,2)
graph.addedge(2,1,3)
graph.addedge(4,5,1)

print(" All vetices in the graph and initial cost")
graph.printout()
source=int(input("Enter source node"))
t=graph.edlist[0]
while t is not 0 :
  print(t.name)
  t=t.next
graph.dijkstra(source)