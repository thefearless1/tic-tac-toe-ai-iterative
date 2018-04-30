var xo="x";

var pos2=[];
var ai=false;
var first=true;
var second=true;
var ai2=false;


function change(id)
{

    var elem = document.getElementById(id);
    elem.value = xo;
    elem.disabled=true;

    pos2[id]=xo;

    if (winCond())
        {
            if (!ai)
             {alert("win");return 0;}
            else
                {alert("lose");return 0;}

            location.reload(true);
        }
   swapXO();

   swapAI();
    if(ai)
        {
            change(AI());
        }



}

function swapAI()
{ai=!ai;}

function swapXO()
{
     if (xo==="x")
     {xo="o";}
    else
    {xo="x";}
}

function init(z)
{
    for (i=0; i<9;i++)
  {
  pos2[i]="_";
    }

 if(z===2)
        {swapAI();}


   if (ai)
   {
       ai2=true;
       change(AI());
   }
}

function winCond()

{
    if(pos2[0]===xo && pos2[1]===xo && pos2[2] === xo)
        {
            return true;
        }
     if(pos2[3]===xo && pos2[4]===xo && pos2[5] === xo)
        {
            return true;
        }
     if(pos2[6]===xo && pos2[7]===xo && pos2[8] === xo)
        {
            return true;
        }
     if(pos2[0]===xo && pos2[3]===xo && pos2[6] === xo)
        {
            return true;
        }
     if(pos2[1]===xo && pos2[4]===xo && pos2[7] === xo)
        {
            return true;
        }
     if(pos2[2]===xo && pos2[5]===xo && pos2[8] === xo)
        {
            return true;
        }
     if(pos2[0]===xo && pos2[4]===xo && pos2[8] === xo)
        {
            return true;
        }
     if(pos2[2]===xo && pos2[4]===xo && pos2[6] === xo)
        {
            return true;
        }
    return false;
}


function AI()

{//Check if AI can win;
    for (i=0; i<9;i++)
        {
            if (pos2[i]==="_")
           {
                pos2[i]=xo;
            if(winCond())
            {return i;}
               else
            {pos2[i]="_";}
           }
        }

    //Check if human can win;
    swapXO();
    for (i=0; i<9;i++)
     {
            if (pos2[i]==="_")
           {
                pos2[i]=xo;
            if(winCond())
            {swapXO();
                first=false;
                return i;}

            pos2[i]="_";
           }
        }
    swapXO();
    //else



    if(pos2[4]==="_")
        {if (!ai2)
            {
                return 4;
            }


        }



    if(first)
    {first=false;
        swapXO();
    if(pos2[1]===xo && pos2[5]===xo)
        {swapXO();
        return 2;
        }

    if(pos2[5]===xo && pos2[7]===xo)
        {swapXO();
        return 8;
        }

    if(pos2[3]===xo && pos2[7]===xo)
        {swapXO();
        return 6;
        }

    if(pos2[1]===xo && pos2[3]===xo)
        {swapXO();
        return 0;
        }

     if(pos2[0]==xo && pos2[8]===xo)
                    {
                        swapXO();
                        return 1;
                    }


    if( pos2[2]==xo && pos2[6]==xo)
                    {
                        swapXO();
                        return 3;
                    }



      if( pos2[0]==xo && pos2[5]==xo)
                    {
                        swapXO();
                        return 2;
                    }
      if( pos2[2]==xo && pos2[7]==xo)
                    {
                        swapXO();
                        return 8;
                    }
      if( pos2[8]==xo && pos2[3]==xo)
                    {
                        swapXO();
                        return 6;
                    }
      if( pos2[6]==xo && pos2[1]==xo)
                    {
                        swapXO();
                        return 0;
                    }

     if( pos2[0]==xo && pos2[7]==xo)
                    {
                        swapXO();
                        return 6;
                    }
      if( pos2[2]==xo && pos2[3]==xo)
                    {
                        swapXO();
                        return 0;
                    }
      if( pos2[8]==xo && pos2[1]==xo)
                    {
                        swapXO();
                        return 2;
                    }
      if( pos2[6]==xo && pos2[5]==xo)
                    {
                        swapXO();
                        return 8;
                    }


    swapXO();
    }
    ////
    if(second)
        {second=false;
            var x = Math.round(Math.random()*8)+1
            if(x%2==1)
                {x--;}
        if(pos2[x]==="_")
            {return x;}
        }


    if(pos2[0]==="_")
        {return 0;}
    if(pos2[2]==="_")
        {return 2;}
    if(pos2[6]==="_")
        {return 6;}
    if(pos2[8]==="_")
        {return 8;}

    if(pos2[1]==="_")
        {return 1;}
    if(pos2[3]==="_")
        {return 3;}
    if(pos2[5]==="_")
        {return 5;}
    if(pos2[7]==="_")
        {return 7;}

   // return 8;

}
function refresh()
{
    location.reload(true);

}
function redirect(link)
{window.location.href = link;}


