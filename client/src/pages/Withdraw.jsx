import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useStateContext } from "../context";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card";
import { FormField } from "../components";
import { Separator } from "../components/ui/separator";
import { ArrowRight } from "lucide-react";

const Withdraw = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const campaign = state?.campaign;

  const [recipient, setRecipient] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!campaign) {
      alert("Missing campaign data");
      return navigate("/");
    }

    if (Date.now() < parseInt(campaign.deadline)) {
      alert("Campaign is still in progress.");
      return navigate("/");
    }
  }, [campaign, navigate]);

  const handleWithdraw = async () => {
    if (!ethers.utils.isAddress(recipient)) {
      alert("Invalid address.");
      return;
    }

    try {
      setIsLoading(true);
      await withdrawToTeam({ args: [recipient, campaign.pId] });
      alert("Withdrawal successful!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to withdraw.");
    } finally {
      setIsLoading(false);
    }
  };
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <main className="flex-1 px-4 py-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold text-text">Withdraw Funds</h2>
            <Card>
              <CardHeader>
                <CardTitle>Withdrawal Details</CardTitle>
                <CardDescription>Transfer your campaign funds to wallet.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  labelName="Recipient Address *"
                  placeholder="Enter wallet address"
                  inputType="text"
                  value={recipient}
                  handleChange={(e) => setRecipient(e.target.value)}
                />
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Separator />
                <Button
                  onClick={handleWithdraw}
                  disabled={isLoading}
                  className="gap-2 bg-[#1dc071] hover:bg-[#46ee9c] text-text"
                >
                  {isLoading ? "Processing..." : "Withdraw Funds"}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

          </div>
        </main>
      </div>
    );
  };

export default Withdraw